import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoriesSection from './components/CategoriesSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get('https://assignment1-pallavikandikanti-lynx.onrender.com/api/products'),
          axios.get('https://assignment1-pallavikandikanti-lynx.onrender.com/api/categories')
        ]);
        
        setProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load products and categories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <Header />
        <div className="loading">Loading products and categories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <Header />
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      
      <main>
        <Hero />
        
        <div className="container">
          <CategoriesSection categories={categories} />
          <ProductsSection products={products} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
