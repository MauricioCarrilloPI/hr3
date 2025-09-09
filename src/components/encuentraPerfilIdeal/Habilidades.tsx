import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Chip, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface HabilidadesProps {
  Skills: string; // Changed from string[] to string
  setSkills: (skills: string) => void; // Changed to accept a string
}

const Habilidades: React.FC<HabilidadesProps> = ({ Skills, setSkills }) => {
  const [nuevaHabilidad, setNuevaHabilidad] = useState('');

  // Convert the comma-separated string to an array for display
  const skillsArray = Skills ? Skills?.split(',').map((skill) => skill?.trim()).filter((skill) => skill) : [];

  const agregarHabilidad = () => {
    if (nuevaHabilidad.trim() !== '') {
      // Add the new skill to the array and join back into a string
      const updatedSkills = [...skillsArray, nuevaHabilidad.trim()];
      setSkills(updatedSkills.join(', '));
      setNuevaHabilidad('');
    }
  };

  const eliminarHabilidad = (index: number) => {
    // Remove the skill at the given index and join back into a string
    const nuevasHabilidades = skillsArray.filter((_, i) => i !== index);
    setSkills(nuevasHabilidades.join(', '));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      agregarHabilidad();
    }
  };

  return (
    <Card elevation={0} sx={{ width: '70%' }}>
      <CardContent>
        {/* Input y botón para agregar habilidades */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <TextField
            fullWidth
            label="Nueva habilidad"
            variant="outlined"
            size="small"
            value={nuevaHabilidad}
            onChange={(e) => setNuevaHabilidad(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ej: React, JavaScript, Python..."
          />
          <Button
            variant="contained"
            onClick={agregarHabilidad}
            disabled={!nuevaHabilidad.trim()}
            sx={{ minWidth: 'auto' }}
          >
            <AddIcon />
          </Button>
        </Box>

        {/* Lista de habilidades */}
        {skillsArray.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skillsArray.map((habilidad, index) => (
              <Chip
                key={index}
                label={habilidad}
                onDelete={() => eliminarHabilidad(index)}
                deleteIcon={<DeleteIcon />}
                variant="outlined"
                sx={{ mb: 1 }}
              />
            ))}
          </Box>
        )}

        {/* Mensaje cuando no hay habilidades */}
        {skillsArray.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 2, color: 'text.secondary' }}>
            <p>No hay habilidades agregadas todavía</p>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default Habilidades;