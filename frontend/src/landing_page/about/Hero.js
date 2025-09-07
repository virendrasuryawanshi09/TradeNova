import React from "react";

function AboutPage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="row p-5 mt-5 mb-5">
        <div className="col text-center">
          <h1 className="fs-2 fw-semibold">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology at{" "}
            <span className="text-primary">TradeNova</span>.
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div
        className="row border-top pt-5 text-muted fs-5"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-md-6 p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company{" "}
            <strong>TradeNova</strong>, a combination of "Trade" and "Nova",
            symbolising new beginnings and limitless opportunities.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us one of the biggest stock brokers in India.
          </p>
          <p>
            Over <strong>1.6+ crore clients</strong> place billions of orders
            every year through our powerful ecosystem of investment platforms,
            contributing over <strong>15% of all Indian retail trading volumes</strong>.
          </p>
        </div>

        <div className="col-md-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us, or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
