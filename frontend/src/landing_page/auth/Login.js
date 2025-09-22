// src/auth/Login.js
import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      // TODO: call backend: await api.loginStart({ user, pwd })
      // TODO: navigate to 2FA page
      alert("Login clicked");
    } catch (e) {
      setErr(e.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div
                  className="rounded mx-auto mb-3"
                  style={{
                    width: 40,
                    height: 40,
                    background:
                      "linear-gradient(135deg,#ff6b2f,#e74c1a)",
                  }}
                />
                <h5 className="text-center mb-3">Login to TradeNova</h5>

                <form onSubmit={submit}>
                  <div className="mb-3">
                    <label className="form-label">Phone number or User ID</label>
                    <input
                      className="form-control"
                      type="text"
                      autoComplete="username"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      autoComplete="current-password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                      required
                    />
                  </div>

                  {err && (
                    <div className="alert alert-danger py-2" role="alert">
                      {err}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-semibold"
                    disabled={loading}
                  >
                    {loading ? "Please wait…" : "Login"}
                  </button>
                </form>

                <div className="text-center mt-3">
                  <a href="/forgot" className="text-muted text-decoration-none">
                    Forgot user ID or password?
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-3 text-secondary">
              Don’t have an account?{" "}
              <a href="/signup" className="text-decoration-none">
                Signup now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
