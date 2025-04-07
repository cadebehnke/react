import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./css/WomenProducts.css"; 

function WomenProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://housing-backend-ujyb.onrender.com/api/women");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-grid">
      {products.map((item) => (
        <ProductCard key={item._id} {...item} />
      ))}
    </div>
  );
}

export default WomenProducts;
