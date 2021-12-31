import React from 'react'
import AuthConatiner from '../components/AuthContainer';
import Link from 'next/link';

export default function register() {
    return (
        <AuthConatiner>
            <div className="register-form mt-5 px-3">
          <form action="#" method="post">
            <div className="form-group text-left mb-4">
              <label htmlFor="username"><i className="lni lni-user"></i></label>
              <input className="form-control" id="username" type="text" name="username" placeholder="Username"/>
            </div>
            <div className="form-group text-left mb-4">
              <label htmlFor="email"><i className="lni lni-envelope"></i></label>
              <input className="form-control" id="email" type="email" name="email" placeholder="Email Address"/>
            </div>
            <div className="form-group text-left mb-4">
              <label htmlFor="password"><i className="lni lni-lock"></i></label>
              <input className="input-psswd form-control" id="registerPassword" type="password" name="password" placeholder="Password"/>
            </div>
            <button className="btn btn-primary btn-lg w-100">Register Now</button>
          </form>
        </div>
        <div className="login-meta-data text-center">
          <p className="mt-3 mb-0">Already have an account?<Link className="ml-2" href="login.html">Login</Link></p>
        </div>
        </AuthConatiner>
    )
}
