import React from "react";
import { useCart } from "react-use-cart";

const Product_Items = ({ id, title, description, price, salePrice, item }) => {
  const { addItem } = useCart();

  return (
    <div className="products" key={id}>
      <div className="product_details">
        <p id="product_title">{title}</p>
        <span id="product_price">Rs.{price}</span>
      </div>
      <button className="btn" onClick={() => addItem(item)}>
        Add
      </button>
    </div>
  );
};

export default Product_Items;
