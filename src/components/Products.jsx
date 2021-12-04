import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import ProductItems from "./Product_Items";

const Products = () => {
  const [product, setProduct] = useState([]);
  const { totalItems, cartTotal } = useCart();

  // fetch the product here
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("http://localhost:3300/product");
      setProduct(data.products);
    };
    fetchProduct();
  }, []);

  return (
    <>
      {product.map((item) => (
        <ProductItems key={item.id} {...item} item={item} />
      ))}

      <div className="footer_cart_info">
        <div className="price-component">
          {/* item count */}
          <p className="price_info">
            {totalItems > 0 ? totalItems : ""}{" "}
            {totalItems < 1 ? "Add product" : totalItems > 1 ? "ITEMS" : "ITEM"}
          </p>
          {/* total cart value */}
          Rs. {cartTotal} (plus taxes)
        </div>
        {totalItems > 0 ? (
          <div className="cart-component">
            <Link className="btn" to="/cart">
              <img src="shopping-cart.svg" alt="Cart" />
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Products;
