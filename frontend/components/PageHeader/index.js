import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Pageheader({ title }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="header-area" id="headerArea">
      <div className="container h-100 d-flex align-items-center justify-content-between">
        {/* <!-- Back Button--> */}
        <div className="back-button">
          <Link href='/' onClick={handleClick}>
            <i className="lni lni-chevron-left"></i>
          </Link>
        </div>
        {/* <!-- Page Title--> */}
        <div className="page-heading">
          <h6 className="mb-0">{title}</h6>
        </div>
        {/* <!-- Search Form--> */}
        <div className="search-form">
          <Link href="/">
            <i className="fa fa-search"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}