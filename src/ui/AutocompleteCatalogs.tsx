import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SpinnerInputsCatalogs from "./SpinnerInputsCatalogs";

interface AutocompleteProps {
  formikMethod: any;
  type: string;
  label: string;
  placeholder: string;
  flag: string;
}

interface Option {
  id: string | number;
  title: string;
}

function AutocompleteCatalogs({ formikMethod, type, label, placeholder, flag }: AutocompleteProps) {
  const [options, setOptions] = useState<Option[]>([]);
  const [text, setText] = useState("");
  const [load, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!text) {
        setOptions([]);
        return;
      }

      try {
        setLoader(true);
        const response = await fetch("https://api-linkedin-aive3zv2ka-pv.a.run.app/api/talent/profile/filters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,
            type,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // Assuming API returns { data: [{ id, title }, ...] }
        const fetchedOptions = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
        }));
        setOptions(fetchedOptions);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setOptions([]);
        setLoader(false);
      }
    };

    fetchData();
  }, [text, type]);

  return (
    <Stack>
      <Autocomplete
        sx={{ width: "60%" }}
        multiple
        id="tags-outlined"
        options={options} // Pass full objects
        getOptionLabel={(option) => (typeof option === "string" ? option : option.title)} // Handle both object and freeSolo string
        value={formikMethod.values[flag] || []} // Expect array of objects or strings
        onChange={(_event, newValue) => {
          // Map to store either objects or strings (for freeSolo)
          const updatedValue = newValue.map((item) =>
            typeof item === "string" ? item : item
          );
          formikMethod.setFieldValue(flag, updatedValue); // Store full objects or strings in Formik
        }}
        onInputChange={(_event, newValue) => setText(newValue || "")}
        filterSelectedOptions
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label={label} placeholder={placeholder} />
        )}
      />
      {load && (
        <Box
          my={2}
          width={"60%"}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <SpinnerInputsCatalogs />
        </Box>
      )}
    </Stack>
  );
}

export default AutocompleteCatalogs;