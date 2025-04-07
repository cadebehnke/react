import React from "react";
import "./css/ProductCard.css";

const BASE_URL = "https://housing-backend-ujyb.onrender.com";

function ProductCard({ name, img_name, price, description, rating }) {
  return (
    <div className="product-card">
      <img src={`${BASE_URL}/${img_name}`} alt={name} />
      <div className="details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
        <div className="rating">⭐ {rating.toFixed(1)}</div>
      </div>
    </div>
  );
}

export default ProductCard;
