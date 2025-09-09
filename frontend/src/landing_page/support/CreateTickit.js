import React from "react";

function CreateTickit() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row p-5 mt-5 mb-4">
        <h1 className="fs-2 text-center">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      {/* Ticket Options Row 1 */}
      <div className="row">
        {/* Account Opening */}
        <div className="col-md-4 p-4 mb-4">
          <div className="border rounded shadow-sm p-4 h-100">
            <h4 className="text-muted mb-3">
              <i className="fa fa-user-plus me-2 " aria-hidden="true"></i>
              Account Opening
            </h4>
            <ul className="list-disc ps-4" style={{ color: "blue" }}>
              <li><a href="#" className="text-decoration-none">Resident individual</a></li>
              <li><a href="#" className="text-decoration-none">Minor</a></li>
              <li><a href="#" className="text-decoration-none">Non Resident Indian (NRI)</a></li>
              <li><a href="#" className="text-decoration-none">Company, Partnership, HUF and LLP</a></li>
              <li><a href="#" className="text-decoration-none">Glossary</a></li>
            </ul>
          </div>
        </div>

        {/* Your Profile */}
        <div className="col-md-4 p-4 mb-4">
          <div className="border rounded shadow-sm p-4 h-100">
            <h4 className="text-muted mb-3">
              <i className="fa fa-id-card me-2" aria-hidden="true"></i>
              Your Profile
            </h4>
            <ul className="list-disc ps-4" style={{ color: "blue" }}>
              <li><a href="#" className="text-decoration-none">Your Profile</a></li>
              <li><a href="#" className="text-decoration-none">Account modification</a></li>
              <li><a href="#" className="text-decoration-none">Client master Report (CMR)</a></li>
              <li><a href="#" className="text-decoration-none">Nomination</a></li>
              <li><a href="#" className="text-decoration-none">Transfer and conversion of securities</a></li>
            </ul>
          </div>
        </div>

        {/* Kite */}
        <div className="col-md-4 p-4 mb-4">
          <div className="border rounded shadow-sm p-4 h-100">
            <h4 className="text-muted mb-3">
              <i className="fa fa-paper-plane me-2 " aria-hidden="true"></i>
              Kite
            </h4>
            <ul className="list-disc ps-4" style={{ color: "blue" }}>
              <li><a href="#" className="text-decoration-none">IPO</a></li>
              <li><a href="#" className="text-decoration-none">Trading FAQs</a></li>
              <li><a href="#" className="text-decoration-none">Margin Trading Facility (MTF) and Margins</a></li>
              <li><a href="#" className="text-decoration-none">Charts and orders</a></li>
              <li><a href="#" className="text-decoration-none">Alerts and Nudges</a></li>
              <li><a href="#" className="text-decoration-none">General</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ticket Options Row 2 */}
      <div className="row">
        {/* Console */}
        <div className="col-md-4 p-4 mb-4">
          <div className="border rounded shadow-sm p-4 h-100">
            <h4 className="text-muted mb-3">
              <i className="fa fa-desktop me-2 " aria-hidden="true"></i>
              Console
            </h4>
            <ul className="list-disc ps-4" style={{ color: "blue" }}>
              <li><a href="#" className="text-decoration-none">Portfolio</a></li>
              <li><a href="#" className="text-decoration-none">Corporate actions</a></li>
              <li><a href="#" className="text-decoration-none">Funds statement</a></li>
              <li><a href="#" className="text-decoration-none">Reports</a></li>
              <li><a href="#" className="text-decoration-none">Profile</a></li>
              <li><a href="#" className="text-decoration-none">Segments</a></li>
            </ul>
          </div>
        </div>

        {/* Funds */}
        <div className="col-md-4 p-4 mb-4">
          <div className="border rounded shadow-sm p-4 h-100">
            <h4 className="text-muted mb-3">
              <i className="fa fa-university me-2 " aria-hidden="true"></i>
              Funds
            </h4>
            <ul className="list-disc ps-4" style={{ color: "blue" }}>
              <li><a href="#" className="text-decoration-none">Add funds</a></li>
              <li><a href="#" className="text-decoration-none">Withdraw funds</a></li>
              <li><a href="#" className="text-decoration-none">UPI payments</a></li>
              <li><a href="#" className="text-decoration-none">Bank account linking</a></li>
              <li><a href="#" className="text-decoration-none">Charges & limits</a></li>
            </ul>
          </div>
        </div>

        {/* Coin */}
        <div className="col-md-4 p-4 mb-4">
          <div className="border rounded shadow-sm p-4 h-100">
            <h4 className="text-muted mb-3">
              <i className="fa fa-inr me-2" aria-hidden="true"></i>
              Coin
            </h4>
            <ul className="list-disc ps-4" style={{ color: "blue" }}>
              <li><a href="#" className="text-decoration-none">Mutual funds</a></li>
              <li><a href="#" className="text-decoration-none">National Pension Scheme (NPS)</a></li>
              <li><a href="#" className="text-decoration-none">Fixed Deposit (FD)</a></li>
              <li><a href="#" className="text-decoration-none">Payments and Orders</a></li>
              <li><a href="#" className="text-decoration-none">General</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTickit;
