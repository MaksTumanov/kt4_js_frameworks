import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import './ProductsPage.css';

const ProductsPage = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3>{product.title}</h3>
          <p>Цена: ₽{product.price}</p>
          <StarRating rating={product.rating.rate} />
          <Link to={`/product/${product.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
