import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useStateValue from "../../contextAPI/StateProvider";
import db from "../../firebase";
import OrderItem from "../orderItem/OrderItem";
import "./Orders.css";
const Orders = () => {
  const [{ user }] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders);
  console.log(user);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.map((order) => (
          <OrderItem order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
