import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer-nav-area" id="footerNav">
        <div className="newsten-footer-nav h-100">
          <ul className="h-100 d-flex align-items-center justify-content-between">
            <li className="active">
              <Link href="/" passHref>
                <i className="lni lni-home"></i>
              </Link>
            </li>
            <li>
              <Link href="/category" passHref>
                <i className="lni lni-grid-alt"></i>
              </Link>
            </li>
            <li>
              <Link href="/trending" passHref>
                <i className="lni lni-bolt-alt"></i>
              </Link>
            </li>

            <li>
              <Link href="/bookmark" passHref>
                <i className="lni lni-bookmark"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
