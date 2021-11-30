import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const [product, setProduct] = useState([]);

  // fetch the product here
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("http://localhost:3300/product");
      setProduct(data.products);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>
        {product && product.map((item) => <Product key={item.id} {...item} />)}
      </h1>
    </div>
  );
}

export default Products;
