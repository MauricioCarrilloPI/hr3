import { useState } from "react"
import { useSelector } from "react-redux";

import { selectAuth } from "../store/slices/AuthSlice";


const usePost = () => {
 const authdata = useSelector(selectAuth);

    const [loanding, setLoanding] = useState<boolean>(false)
    const [error, setError] = useState<any>()

const postData = async (url:string, data:any) =>{
    setLoanding(true);
    setError(null);

try {
    console.log(authdata.token)
    const response = await fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authdata.token}`,
        },

        body:JSON.stringify(data),
    })

    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message || 'error en peticion Post')
    }
    const result = await response.json();
    return result;

            
} catch (error: any) {
    setError(error.message)
    throw error
} finally {
    setLoanding(false)
}

}

  return {postData, loanding, error}
}

export default usePost