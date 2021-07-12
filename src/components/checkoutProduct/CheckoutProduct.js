import React, { forwardRef } from "react";
import useStateValue from "../../contextAPI/StateProvider";
import "./CheckoutProduct.css";
const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hiddeButton }, ref) => {
    const [{}, dispatch] = useStateValue();
    return (
      <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {hiddeButton && (
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_BASKET",
                  id: id,
                });
              }}
            >
              Remove from Basket
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
