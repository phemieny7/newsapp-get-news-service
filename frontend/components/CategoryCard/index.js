import React from "react";
import Link from "next/link";

export default function CategoryCard({
  url,
  image,
  category,
  title,
  showModal,
}) {
  return (
    <div className="card catagory-card">
      <a onClick={showModal}>
        <img src={image} alt="" />
        <h6>{category}</h6>

        {title}
      </a>
    </div>
  );
}
