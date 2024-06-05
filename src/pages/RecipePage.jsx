// src/pages/RecipePage.jsx
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import RecipeList from '../components/RecipeList';

const recipes = [
  {
    title: 'Tarta de miel y jalea de limón',
    description: 'Cómo hacer "Tarta de miel y jalea de limón"',
    details: 'Detalles de la receta 1...',
    videoUrl: 'https://www.youtube.com/embed/YGIhDIQoLCA' // Agrega la URL del video aquí
  },
  {
    title: 'Chocolate hecho a mano de San Valentín',
    description: 'Cómo hacer "Chocolate hecho a mano de San Valentín"',
    details: 'Detalles de la receta 2...',
    videoUrl: 'https://www.youtube.com/embed/gQIJMutOTPI' // Agrega la URL del video aquí
  },
  {
    title: 'Chocolate ice cream',
    description: 'Cómo hacer "Chocolate ice cream',
    details: 'Detalles de la receta 2...',
    videoUrl: 'https://www.youtube.com/embed/hczK6Bf3e6A' // Agrega la URL del video aquí
  },
  // Agrega más recetas según sea necesario
];

const RecipePage = () => {
  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Recetas populares
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <RecipeList recipes={recipes} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipePage;
