import React from "react";
import useStateValue from "../../contextAPI/StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";
import "./Checkout.css";
import FlipMove from "react-flip-move";
const Checkout = () => {
  const [{ user, basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user ? user.email : "guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <FlipMove>
            {basket.map(({ id, image, title, price, rating }, index) => (
              <CheckoutProduct
                key={index}
                id={id}
                image={image}
                title={title}
                price={price}
                rating={rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
