// src/pages/ProductsPage.jsx
import React from 'react';
import { Grid } from '@mui/material';
import Product from '../components/Product';

const products = [
    {
        image: 'https://http2.mlstatic.com/D_NQ_NP_821730-MLU72601168563_102023-O.webp',
        name: 'Nombre producto',
        description: 'Descripción de producto',
        link: 'https://www.mercadolibre.com.mx/batidora-de-pedestal-profesional-cocina-potent-260w-nevashel-color-negro-frecuencia-60hz/p/MLM27954777?pdp_filters=category:MLM10085#searchVariation=MLM27954777&position=6&search_layout=stack&type=product&tracking_id=1701f6d9-9bc4-4740-9097-d9e0487e3567'
      },
      {
        image: 'https://http2.mlstatic.com/D_NQ_NP_949811-MLU72631459445_112023-O.webp',
        name: 'Nombre producto',
        description: 'Descripción de producto',
        link: 'https://www.example.com/producto2'
      },
      {
        image: 'https://http2.mlstatic.com/D_NQ_NP_821730-MLU72601168563_102023-O.webp',
        name: 'Nombre producto',
        description: 'Descripción de producto',
        link: 'https://www.mercadolibre.com.mx/batidora-de-pedestal-profesional-cocina-potent-260w-nevashel-color-negro-frecuencia-60hz/p/MLM27954777?pdp_filters=category:MLM10085#searchVariation=MLM27954777&position=6&search_layout=stack&type=product&tracking_id=1701f6d9-9bc4-4740-9097-d9e0487e3567'
      },
      {
        image: 'https://http2.mlstatic.com/D_NQ_NP_949811-MLU72631459445_112023-O.webp',
        name: 'Nombre producto',
        description: 'Descripción de producto',
        link: 'https://www.example.com/producto2'
      },
      {
        image: 'https://http2.mlstatic.com/D_NQ_NP_821730-MLU72601168563_102023-O.webp',
        name: 'Nombre producto',
        description: 'Descripción de producto',
        link: 'https://www.mercadolibre.com.mx/batidora-de-pedestal-profesional-cocina-potent-260w-nevashel-color-negro-frecuencia-60hz/p/MLM27954777?pdp_filters=category:MLM10085#searchVariation=MLM27954777&position=6&search_layout=stack&type=product&tracking_id=1701f6d9-9bc4-4740-9097-d9e0487e3567'
      },
      {
        image: 'https://http2.mlstatic.com/D_NQ_NP_949811-MLU72631459445_112023-O.webp',
        name: 'Nombre producto',
        description: 'Descripción del producto 2',
        link: 'https://www.example.com/producto2'
      },
  
  // Agrega más productos según sea necesario
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Lista de Productos</h1>
      <Grid container spacing={4} sx={{ py: 10, px: 2 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className='mx-5 flex justify-content-center'>
            <div className='my-2 mx-5'>
            <Product
              image={product.image}
              name={product.name}
              description={product.description}
              link={product.link}
            />
            </div>
            
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsPage;
