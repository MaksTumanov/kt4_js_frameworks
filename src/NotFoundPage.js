import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>404 - Не найдено</h2>
      <p>Такой страницы не существует.</p>
      <Link to="/products">Перейти к главному экрану</Link>
    </div>
  );
};

export default NotFoundPage;
