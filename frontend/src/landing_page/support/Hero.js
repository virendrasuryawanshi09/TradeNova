import React from "react";

function Hero() {
  return (
    <section className="container-fluid border-bottom" id="supportHero">
      {/* Top bar */}
      <div
        className="row p-5 d-flex align-items-center justify-content-between"
        id="supportWrapper"
      >
        <div className="col-auto">
          <h4 className="fw-semibold mb-0">Support Portal</h4>
        </div>
        <div className="col-auto">
          <a href="#" className="text-decoration-none text-light fw-medium">
            Track Tickets
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="row p-5">
        <div className="col-md-6 mb-4">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control form-control-lg"
            placeholder="eg. How do I activate F&O"
          />
        </div>
        <div className="col-md-6">
        </div>
      </div>
    </section>
  );
}

export default Hero;
