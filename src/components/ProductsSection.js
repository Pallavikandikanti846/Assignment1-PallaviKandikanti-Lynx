import React from 'react';
import ProductCard from './ProductCard';
import './ProductsSection.css';

function ProductsSection({ products }) {
  return (
    <section className="products-section">
      <h2 className="section-title">Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
