import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p style={{ padding: "20px" }}>Loading details...</p>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          textDecoration: "none",
          color: "blue",
        }}
      >
        ← Back to Products
      </Link>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "contain",
          marginBottom: "20px",
        }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Price</strong>: R{product.price}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
    </div>
  );
}
