// src/pages/ProductsPage.jsx
import React from 'react';
import ProductList from '../components/ProductsList';

const products = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    link: 'https://www.example.com/producto1'
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    link: 'https://www.example.com/producto2'
  },
  
  // Agrega más productos según sea necesario
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Lista de Productos</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
