import { Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "./app.css";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Products from "./components/Products";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </CartProvider>
  );
}
