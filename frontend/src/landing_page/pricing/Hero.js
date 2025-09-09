import React from 'react';

function Hero() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row text-center border-bottom p-5 mt-5">
        <div className="col-12">
          <h1>Pricing</h1>
          <h3 className="text-muted mt-3 fs-5">
            List of all charges and taxes
          </h3>
        </div>
      </div>

      {/* Pricing Highlights */}
      <div className="row text-center p-5">
        
        <div className="col-md-4 p-4">
          <img src="media/images/pricing0.svg" alt="Free equity delivery" />
          <h1 className="fs-4 mt-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Intraday and F&O trades" />
          <h1 className="fs-4 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, 
            currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img src="media/images/pricing0.svg" alt="Free direct MF" />
          <h1 className="fs-4 mt-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
