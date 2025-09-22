import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row text-center g-4">
        <div className="col-md-4 p-4 d-flex flex-column align-items-center h-150">
          <img
            src="media/images/pricing0.svg"
            alt="Free equity delivery"
            className="img-fluid d-block mx-auto mb-3"
            style={{ maxWidth: 220 }}
          />
          <h1 className="fs-4 mt-1">Free equity delivery</h1>
          <p className="text-muted mb-0">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-md-4 p-4 d-flex flex-column align-items-center h-100">
          <img
            src="media/images/pricingEquity.svg"
            alt="Intraday and F&O trades"
            className="img-fluid d-block mx-auto mb-3"
            style={{ maxWidth: 220 }}
          />
          <h1 className="fs-4 mt-1">Intraday and F&O trades</h1>
          <p className="text-muted mb-0">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-md-4 p-4 d-flex flex-column align-items-center h-100">
          <img
            src="media/images/pricing0.svg"
            alt="Free direct MF"
            className="img-fluid d-block mx-auto mb-3"
            style={{ maxWidth: 220 }}
          />
          <h1 className="fs-4 mt-1">Free direct MF</h1>
          <p className="text-muted mb-0">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
