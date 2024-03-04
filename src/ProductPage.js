import React from 'react';
import { Link, useParams } from 'react-router-dom';
import StarRating from './StarRating';

const ProductPage = ({ products }) => {
  const {id} = useParams();
  const product = products.find(product => product.id === parseInt(id));
  if (!product) {return <div>Загрузка...</div>}

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{maxWidth:'100px'}}/>
      <p>Описание: {product.description}</p>
      <p>Цена: ${product.price}</p>
      <StarRating rating={Math.round(product.rating.rate)}/>
      <Link to="/products">Назад</Link>
    </div>
  );
};

export default ProductPage;