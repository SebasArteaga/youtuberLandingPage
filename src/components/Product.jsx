// src/components/Product.jsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #ccc',
  padding: '16px',
  margin: '16px',
  width: '200px',
  textAlign: 'center',
}); */

const CustomTypography = styled(Typography)({
  fontSize: '1.1rem',
  textAlign: 'start',
  lineHeight: '1.5',
  color: '#515151',
  marginTop: '1.5rem',
});

const Product = ({ image, name, description, link }) => {
  return (
    <CustomBox component='article'>
      <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
      <Typography variant="h6">{name}</Typography>
      <CustomTypography>{description}</CustomTypography>
      <Button variant="contained" color="primary" href={link} target="_blank" rel="noopener noreferrer">
        Comprar
      </Button>
    </CustomBox>
  );
};

export default Product;
