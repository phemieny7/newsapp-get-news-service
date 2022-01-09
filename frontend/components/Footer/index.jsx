import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  // console.log(router)
  return (
    <>
      <div className="footer-nav-area" id="footerNav">
        <div className="newsten-footer-nav h-100">
          <ul className="h-100 d-flex align-items-center justify-content-between">
            <li {...router.pathname == "/" ? `className="active"` : null}>
              <Link href="/" passHref>
                <a>
                  <i className="lni lni-home"></i>
                </a>
              </Link>
            </li>
            <li {...router.pathname == "category" ? `className="active"` : null}>
              <Link href="/category" passHref>
              <a>
                <i className="lni lni-grid-alt"></i>
              </a>
              </Link>
            </li>
            <li {...router.pathname == "trending" ? `className="active"` : null}>
              <Link href="/trending" passHref>
              <a>
                <i className="lni lni-bolt-alt"></i>
              </a>
              </Link>
            </li>
            {/* <li>
              <Link href="/search" passHref>
              <a href="pages.html">
                <i className="lni lni-heart"></i>
              </a>
            </li> */}
            <li {...router.pathname == "bookmark" ? `className="active"` : null}>
              <Link href="/bookmark" passHref>
              <a>
                <i className="lni lni-bookmark"></i>
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}