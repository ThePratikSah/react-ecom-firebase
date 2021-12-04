import axios from "axios";
import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // fetch the product here
  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get("http://localhost:3300/order");
      setOrders(data.orders);
    };
    fetchOrders();
  }, []);

  return (
    <>
      {/* rendering all the orders here */}
      {orders.map((item) => (
        <div key={item.id}>
          <p>{item.phone}</p>
          <ul>
            {JSON.parse(item.orderDetails).map((e) => (
              <li key={e.id}>
                {e.title} - {e.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Orders;
