import React from 'react';
import './CategoriesSection.css';

function CategoriesSection({ categories }) {
  return (
    <section className="categories-section">
      <h2 className="section-title">Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
