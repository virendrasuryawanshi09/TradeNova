// src/auth/SignUp.js
import React, { useState } from "react";

export default function SignUp() {
  const [mobile, setMobile] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("Get OTP clicked");
  };

  return (
    <div className="container-xxl py-5">
      {/* Top hero heading */}
      <div className="container border-bottom mb-5">
        <div
          className="text-center text-md-start p-4 mx-auto"
        >
          <h1 className="mt-2 display-5 fw-semibold text-center">
            Open a free demat & trading account online
          </h1>
          <p className="text-muted fs-5 mb-0 text-center">
            Start investing brokerage free and join a community.
          </p>
        </div>
      </div>

      <div className="row align-items-start g-4">
        {/* Left hero copy (illustration placeholders) */}
        <div className="col-12 col-md-7">
          <div className="position-relative" style={{ height: 280 }}>
            <div
              className="position-absolute bg-white border rounded-3 shadow-sm"
              style={{ left: 0, top: 24, width: 420, height: 180 }}
            />
            <div
              className="position-absolute bg-white border rounded-3 shadow-sm"
              style={{ left: 56, top: 160, width: 320, height: 120 }}
            />
            <div
              className="position-absolute bg-white border rounded-3 shadow-sm"
              style={{ left: 200, top: 90, width: 200, height: 140 }}
            />
          </div>
        </div>

        {/* Right form box */}
        <div className="col-12 col-md-5 mt-4">
          <div className="border rounded-3 shadow-sm p-3 p-md-4 bg-white">
            <h4 className="mb-1 fw-semibold">Signup now</h4>
            <p className="text-muted mb-3 small">
              Or track your existing application
            </p>

            <form onSubmit={submit}>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0">+91</span>
                <input
                  type="tel"
                  className="form-control border-start-0"
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 fw-semibold mt-3"
              >
                Get OTP
              </button>
            </form>

            <p className="text-muted small mt-2 mb-0">
              By proceeding, agreement is given to the terms & privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
