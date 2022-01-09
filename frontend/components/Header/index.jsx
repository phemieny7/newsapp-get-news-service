import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import Logo from "../../assets/img/core-img/logo.png";
import Link from "next/link";

export default function Header() {
  return (

    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between">
        {/* <!-- Navbar Toggler--> */}
        <div className="navbar--toggler" id="newstenNavbarToggler">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo-wrapper">
          <Link href="/" passHref>
            <img src={Logo.src} />
          </Link>
        </div>
        <div className="search-form">
          <Link href="/" passHref>
            <i className="fa fa-search"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
