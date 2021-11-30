import React from "react";

function Product({ title, description, price, salePrice }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p style={{ textDecoration: "line-through" }}>{price}</p>
      <p>Rs {salePrice}/-</p>
    </div>
  );
}

export default Product;
