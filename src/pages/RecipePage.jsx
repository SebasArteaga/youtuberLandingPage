// src/pages/RecipePage.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import RecipeList from '../components/RecipeList';

const recipes = [
  {
    title: 'Receta 1',
    description: 'Descripción de la receta 1',
    details: 'Detalles de la receta 1...'
  },
  {
    title: 'Receta 2',
    description: 'Descripción de la receta 2',
    details: 'Detalles de la receta 2...'
  },
  // Agrega más recetas según sea necesario
];

const RecipePage = () => {
  return (
    <Container>
      <Typography variant="h1" component="h1">
        Lista de Recetas
      </Typography>
      <RecipeList recipes={recipes} />
    </Container>
  );
};

export default RecipePage;
