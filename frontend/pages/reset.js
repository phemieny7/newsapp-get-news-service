import React from "react";
import AuthConatiner from "../components/AuthContainer";
import Link from "next/link";

export default function reset() {
  return (
    <AuthConatiner>
      <div className="register-form mt-5 px-3">
        <form
          action="#"
          method="post"
        >
          <div className="form-group text-left mb-4">
            <label htmlFor="username">
              <i className="lni lni-user"></i>
            </label>
            <input
              className="form-control"
              id="username"
              type="text"
              name="username"
              placeholder="Username or email"
            />
          </div>
          <button className="btn btn-primary btn-lg w-100">Reset Password</button>
        </form>
      </div>
      {/* <!-- Login Meta--> */}
      <div className="login-meta-data text-center">
        <Link
          className="forgot-password d-block mt-3 mb-1"
          href="forget-password.html"
        >
         Login
        </Link>
        <p className="mb-0">
          Didnt have an account?
          <Link className="ml-2" href="register.html">
            Register
          </Link>
        </p>
      </div>
    </AuthConatiner>
  );
}
