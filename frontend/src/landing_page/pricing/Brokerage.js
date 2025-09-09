import React from 'react';

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        
        {/* Left Section */}
        <div className="col-md-8 p-4 text-start">
          <h3 className="mb-4">
            <a href="#" style={{ textDecoration: "none" }}>
              Brokerage calculator
            </a>
          </h3>
          <ul className="text-muted fs-6" style={{ lineHeight: "2.2" }}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note.
              Courier charges apply.
            </li>
            <li>
              For NRI account (non-P/S), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (P/S), 0.6% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debt balance, any order placed will be charged ₹40 per executed
              order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-md-4 p-4 d-flex align-items-start justify-content-center">
          <h3 className="mb-4">
            <a href="#" style={{ textDecoration: "none" }}>
              List of charges
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
