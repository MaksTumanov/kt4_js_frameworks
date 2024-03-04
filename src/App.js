import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';
import NotFoundPage from './NotFoundPage';

class App extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Проверьте интернет подключение');
      }
      const products = await response.json();
      this.setState({ products });
    } catch (error) {
      console.error('Проблема с доступом: ', error);
    }
  }

  render() {
    return (
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/products" element={<ProductsPage products={this.state.products} />} />
        <Route path="/product/:id" element={<ProductPage products={this.state.products} />} />
      </Routes>
    );
  }
}

export default App;
