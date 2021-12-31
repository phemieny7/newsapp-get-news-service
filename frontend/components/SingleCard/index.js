import React from "react";

export default function index({
  image,
  url,
  title,
  category,
  date,
  ...otherProps
}) {
  return (
    <>
      <a className="bookmark-post" href="#">
        <i className="lni lni-bookmark"></i>
      </a>
      <div className="post-thumbnail">
        <img src={image} alt="" />
      </div>
      <div className="post-content">
        <a className="post-catagory" href="#">
          {category}
        </a>
        <a className="post-title d-block" href={url}>
          {title}
        </a>
        <div className="post-meta d-flex align-items-center">
          <a href="#">
            <i className="mr-1 fa fa-user-o"></i>Nazrul
          </a>
          <a href="#">
            <i className="mr-1 fa fa-clock-o"></i>{date}
          </a>
        </div>
      </div>
    </>
  );
}
