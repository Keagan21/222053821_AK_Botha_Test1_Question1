import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "15px",
          backgroundColor: "white",
          textAlign: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 2px 6px",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            height: "150px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
        <h3>{product.title}</h3>
        <p style={{ fontWeight: "bold" }}>R{product.price}</p>
      </div>
    </Link>
  );
}
