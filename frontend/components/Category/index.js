import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Category({url, image, category}) {
  return (
    <div className="col-6 col-sm-4">
      <div className="card catagory-card mb-3">
        <Link href={url} passHref>
          <img src={image} alt=""/>
        </Link>
        <h6>{category}</h6>
      </div>
    </div>
  );
}
