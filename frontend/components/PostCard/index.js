import React from "react";
import Link from "next/link";

export default function PostCard({
  image,
  title,
  content,
  date,
}) {
  return (
    <>
      <div className="modal-body">
        <div className="single-blog-thumbnail">
          <img className="w-100" src={image} alt="" />
          <a className="post-bookmark" href="#">
            <i className="lni lni-bookmark"></i>
          </a>
        </div>

        <div className="single-blog-info">
          <div className="container">
            <div className="d-flex align-items-center">
              {/* <!-- Post Like Wrap--> */}
              <div className="post-like-wrap">
                {/* <!-- Favourite Post--> */}
                <a className="post-love d-block" href="#">
                  <i className="lni lni-heart"></i>
                </a>
                <span className="d-block">368 Likes</span>
                <div className="line"></div>
                {/* <!-- Share Post-->\ */}
                <a
                  className="post-share"
                  href="#"
                  data-toggle="modal"
                  data-target="#postShareModal"
                >
                  <i className="fa fa-share-alt"></i>
                </a>
                <span className="d-block">1,028</span>
              </div>
              {/* <!-- Post Content Wrap--> */}
              <div className="post-content-wrap">
                <h5 className="mb-2">{title}</h5>
                <div className="post-meta">
                  <a className="post-date" href="#">
                    {date}
                  </a>
                  <a className="post-views" href="#">
                    9,451 Views
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Blog Description--> */}
        <div className="blog-description">
          <div className="container">{content}</div>
        </div>
      </div>
    </>
  );
}
