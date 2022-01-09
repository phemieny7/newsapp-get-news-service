import React from "react";
import logo1 from "../../assets/img/core-img/login.png"
import logo2 from "../../assets/img/core-img/login2.png"
import logo3 from "../../assets/img/bg-img/12.png"
import Image from "next/image";



export default function AuthCointainer({title, children}) {
  return (
    <div>
      <div className="preloader" id="preloader">
        <div className="spinner-grow text-secondary" role="status">
          <div className="sr-only">Loading...</div>
        </div>
      </div>
      <div className="login-wrapper d-flex align-items-center justify-content-center">
      {/* <!-- Shape--> */}
      <div className="login-shape"><img src={logo1.src} alt=""/></div>
      <div className="login-shape2"><img src={logo2.src} alt=""/></div>
      <div className="container">
        {/* <!-- Login Text--> */}
        <div className="login-text text-center"><img className="login-img" src={logo3.src} alt=""/>
          <h3 className="mb-0">{title}</h3>
          {/* <!-- Shapes--> */}
          <div className="bg-shapes">
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
            <div className="shape4"></div>
            <div className="shape5"></div>
            <div className="shape6"></div>
            <div className="shape7"></div>
            <div className="shape8"></div>
          </div>
        </div>


        {children}
      </div>
    </div>
    </div>
  );
}
