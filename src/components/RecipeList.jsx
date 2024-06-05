// src/components/RecipeList.jsx
import React from 'react';
import { List, ListItem } from '@mui/material';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe, index) => (
        <ListItem key={index}>
          <Recipe
            title={recipe.title}
            description={recipe.description}
            details={recipe.details}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default RecipeList;
