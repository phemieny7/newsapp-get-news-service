import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function BookmarkCard({url, image, category, title, showModal}) {
    return (
        <div className="col-6 col-md-4">
        <div className="single-recommended-post mt-3">
          {/* <!-- Customize Button--> */}
          <div className="bookmark-customize-option">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="lni lni-more"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">
                <i className="mr-1 lni lni-cut"></i>Remove
              </button>
              <button className="dropdown-item" type="button">
                <i className="mr-1 lni lni-crop"></i>Edit
              </button>
              <button className="dropdown-item" type="button">
                <i className="mr-1 lni lni-cog"></i>Settings
              </button>
            </div>
          </div>
          <div className="post-thumbnail">
            <img src={image} alt={image}/>
          </div>
          <div className="post-content">
            <a className="post-catagory" href="#">
              {category}
            </a>
           
            <a className="post-title" onClick={showModal}>
              {title}
            </a>
          </div>
        </div>
      </div>
    )
}
