import React from "react";
import Background from "../../assets/img/bg-img/1.jpg";
import Link from "next/link";

export default function SidebarNav() {
  return (
    <div className="sidenav-wrapper" id="sidenavWrapper">
      {/* <!-- Time - Weather--> */}
      <div
        className="time-date-weather-wrapper text-center py-5"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="weather-update mb-4">
          <l className="icon lni lni-cloudy-sun"></l>
          <h4 className="mb-1">92°F</h4>
          <h6 className="mb-0">Dhaka</h6>
          <p className="mb-0">Mostly sunny</p>
        </div>
        <div className="time-date">
          <div id="dashboardDate"></div>
          <div className="running-time d-flex justify-content-center">
            <div id="hours"></div>
            <span>:</span>
            <div id="min"></div>
            <span>:</span>
            <div id="sec"></div>
          </div>
        </div>
      </div>
      {/* <!-- Sidenav Nav--> */}
      <ul className="sidenav-nav">
        <li>
          <Link href="/">
            <i className="lni lni-play"></i>Live
            <span className="red-circle ml-2 flashing-effect"></span>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <i className="lni lni-user"></i>My Profile
          </Link>
        </li>
        <li>
          <Link href="/category">
            <i className="lni lni-grid-alt"></i>All Category{" "}
            <span className="ml-2 badge badge-warning">14+</span>
          </Link>
        </li>
        <li>
          <Link href="/bookmark">
            <i className="lni lni-cog"></i>Settings
          </Link>
        </li>
        <li>
          <Link href="/login">
            <i className="lni lni-power-switch"></i>Log In
          </Link>
        </li>
      </ul>
      {/* <!-- Go Back Button--> */}
      <div className="go-home-btn" id="goHomeBtn">
        <i className="lni lni-arrow-left"></i>
      </div>
    </div>
  );
}
