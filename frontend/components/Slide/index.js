import React from "react";

export default function index({
  category,
  title,
  date,
  image,
  source,
  url,
  time,
}) {
  return (
    <div className="single-hero-slide" style={{ backgroundImage: `url(${image})` }}>
      <div className="background-shape">
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
      <div className="slide-content h-100 d-flex align-items-end">
        <div className="container-fluid mb-3">
          <a className="bookmark-post" href={url}>
            <i className="lni lni-bookmark"></i>
          </a>
          <a className="post-catagory" href="catagory.html">
            {category}
          </a>
          <a className="post-title d-block" href="single.html">
            {title}
          </a>
          <div className="post-meta d-flex align-items-center">
            <a href="#">
              <i className="mr-1 lni lni-user"></i>
              {source}
            </a>
            <a href="#">
              <i className="mr-1 lni lni-calendar"></i>
              {date}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
