import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import useStateValue from "../../contextAPI/StateProvider";
import { useEffect } from "react";
import { getBasketTotal } from "../../contextAPI/reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
