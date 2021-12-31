import React from "react";
import Link from "next/link";

export default function CategoryCard({url, image, category}) {
  return (
    <div className="card catagory-card">
      <Link href={url} passHref>
        <img src={image} alt="" />
        <h6>{category}</h6>
      </Link>
    </div>
  );
}
