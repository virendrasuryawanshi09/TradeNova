import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [submitting, setSubmitting] = useState(false);

  const handleBuyClick = async () => {
    try {
      setSubmitting(true);
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });
      closeBuyWindow();
    } catch (err) {
      console.error("Order failed", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      {/* ...inputs... */}
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick} disabled={submitting}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={closeBuyWindow} disabled={submitting}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
