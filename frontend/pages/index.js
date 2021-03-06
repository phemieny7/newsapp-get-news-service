import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import SingleCard from "../components/SingleCard";
import CategoryCard from "../components/CategoryCard";
import Category from "../components/Category";
import Link from "next/link";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import { getSession } from "next-auth/client";

export default function Home(props) {
  const [modal, setModal] = React.useState(false);
  const [singleContent, setSingleContent] = React.useState(null);

  const toggle = (item) => {
    setSingleContent(item); // setSingleContet(item)
    setModal(!modal);
  };
  const [session, loading] = useSession();
  const router = useRouter();

  // const refreshData = () => router.replace(router.asPath);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {singleContent !== null ? (
            <PostCard
              title={singleContent.title}
              image={singleContent.urlToImage}
              content={singleContent.content}
              date={singleContent.publishedAt}
            />
          ) : null}
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Layout>
        <div className="news-today-wrapper">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-3 pl-1 newsten-title">News Today</h5>
              <div>
                <p className="mb-3 line-height-1" id="dashboardDate2"></p>
              </div>
            </div>
            <div className="hero-slides owl-carousel">
              {/* <!-- Single Hero Slide--> */}
              {props.news.length > 0 ? (
                props.news.map((item, index) => {
                  return (
                    <>
                      <div
                        className="single-hero-slide"
                        style={{ backgroundImage: `url(${item.urlToImage})` }}
                        key={index}
                      >
                        {/* <!-- Background Shape--> */}
                        <div className="background-shape">
                          <div className="circle2"></div>
                          <div className="circle3"></div>
                        </div>
                        <div className="slide-content h-100 d-flex align-items-end">
                          <div className="container-fluid mb-3">
                            <a
                              className="post-title d-block"
                              id="getPost"
                              onClick={() => toggle(item)}
                            >
                              {item.title}
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <h1>Not Working</h1>
              )}
              {/* <!-- Single Hero Slide--> */}
            </div>
          </div>
        </div>
        {/* End of News slider */}

        {/* top categories */}
        <div className="top-catagories-wrapper">
          <div className="bg-shapes">
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
          </div>
          <h6 className="mb-3 catagory-title">Top Headlines</h6>
          <div className="container">
            <div className="catagory-slides owl-carousel ">
              {props.news.map((item, index) => {
                // console.log(index);
                return (
                  <div
                    className="single-trending-post d-flex"
                    key={index}
                  >
                    <CategoryCard
                      showModal={()=>toggle(item)}
                      image={item.urlToImage}
                      title={item.title}

                    />

                    {/* <CategoryCard key={item.id} image={item.image.src} {...item} /> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* end of top categories */}
        <div className="trending-news-wrapper">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0 pl-1 newsten-title">Trending Sport New</h5>
              <Link href="/category/sport">
                <a className="btn btn-danger btn-sm">View All</a>
              </Link>
            </div>
          </div>
          <div className="container">
            {/* <!-- Single Trending Post--> */}
            {props.sportNews.map((item, index) => {
              return (
                <div className="single-trending-post d-flex" key={index}>
                  <div className="post-thumbnail">
                    <img src={item.urlToImage} alt="" />
                  </div>
                  <div className="post-content">
                    <a className="post-title" onClick={() => toggle(item)}>
                      {item.title}
                    </a>
                    <div className="post-meta d-flex align-items-center">
                      <Link href="/category/sport">Sports</Link>
                      {/* <Link href="#">02 Jun 20</Link> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*  */}
        {/* Popular tag */}
        <div className="popular-tags-wrapper">
          <div className="container">
            <h5 className="mb-3 pl-2 newsten-title">Popular Tags</h5>
          </div>
          <div className="container">
            <div className="popular-tags-list">
              <Link href="/category/politics">
                <a className="btn btn-primary btn-sm m-1">#Politics</a>
              </Link>
              <Link href="/category/fashion">
                <a className="btn btn-primary btn-sm m-1">#Fashion</a>
              </Link>
              <Link href="/category/tech">
                <a className="btn btn-warning btn-sm m-1">#Tech</a>
              </Link>
              <Link href="/category/lifestyle">
                <a className="btn btn-danger btn-sm m-1">#Lifestyle</a>
              </Link>
              <Link href="/category/sport">
                <a className="btn btn-info btn-sm m-1">#sport</a>
              </Link>
              <Link href="/category/world">
                <a className="btn btn-success btn-sm m-1">#world</a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {

  const trial = async () => {
    let result = await axios.get(
      `https://t1ti0k29ig.execute-api.us-east-1.amazonaws.com/dev/`
    );
    return result.data;
  };

  const sport = async () => {
    let result = await axios.get(
      `https://t1ti0k29ig.execute-api.us-east-1.amazonaws.com/dev/?category=sport`
    );
    return result.data;
  };
  const getSport = await sport();
  const getNews = await trial();
  const sportNews = getSport.message.articles
  const news = getNews.message.articles;

//   const sportNews = [{
//     "author": "BBC News",
//     "title": "Trump says he will not sign a bill to repeal Obamacare",
//     "description": "Trump says he will not sign a bill to repeal Obamacare",
//     "url": "https://www.bbc.com/news/world-us-canada-52709852",
//     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8B4E/production/_111809852_gettyimages-120585898.jpg",
//     "publishedAt": "2020-06-02T17:00:00Z",
//     "content": "Trump says he will not sign a bill to repeal Obamacare"
//   },
//   {
//     "author": "BBC News",
//     "title":"Texas man higejre fsdfjdfafas",
//     "description": "Trump says he will not sign a bill to repeal Obamacare",
//     "url": "https://www.bbc.com/news/world-us-canada-52709852",
//     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8B4E/production/_111809852_gettyimages-120585898.jpg",
//     "publishedAt": "2020-06-02T17:00:00Z",
//     "content": "Trump says he will not sign a bill to repeal Obamacare"
//   }
// ]

// const news = [{
//   "author": "BBC News",
//   "title": "Trump says he will not sign a bill to repeal Obamacare",
//   "description": "Trump says he will not sign a bill to repeal Obamacare",
//   "url": "https://www.bbc.com/news/world-us-canada-52709852",
//   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8B4E/production/_111809852_gettyimages-120585898.jpg",
//   "publishedAt": "2020-06-02T17:00:00Z",
//   "content": "Trump says he will not sign a bill to repeal Obamacare"
// },
// {
//   "author": "BBC News",
//   "title":"Texas man higejre fsdfjdfafas",
//   "description": "Trump says he will not sign a bill to repeal Obamacare",
//   "url": "https://www.bbc.com/news/world-us-canada-52709852",
//   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8B4E/production/_111809852_gettyimages-120585898.jpg",
//   "publishedAt": "2020-06-02T17:00:00Z",
//   "content": "Trump says he will not sign a bill to repeal Obamacare"
// }
// ]

  return {
    props: {
      news,
      sportNews,
    },
  };
}
