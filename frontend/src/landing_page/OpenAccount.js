import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h2 className="mt-6">Open a TradeNova account</h2>
        <p className="mt-4">
          Modern platform and apps, ₹ 0 investments, and flat ₹ 20 intraday and F&O trades.
        </p>

        <Link
          to="/signup"
          className="p-2 btn btn-primary mt-4 fs-5 mb-5"
          style={{ width: "17%", margin: "0 auto" }}
        >
          Sign up Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
