// src/components/ProductList.jsx
import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import Product from './Product';

const CustomGridItem = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
});

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={{ xs: 4, sm: 4, md: 0 }} sx={{ py: 10, px: 2 }}>
      {products.map((product, index) => (
        <CustomGridItem item xs={12} key={index}>
          <Product
            image={product.image}
            name={product.name}
            description={product.description}
            link={product.link}
          />
        </CustomGridItem>
      ))}
    </Grid>
  );
};

export default ProductList;
