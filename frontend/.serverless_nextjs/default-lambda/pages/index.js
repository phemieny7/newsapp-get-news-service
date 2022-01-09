"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 80789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);





function Category({
  url,
  image,
  category
}) {
  return /*#__PURE__*/_jsx("div", {
    className: "col-6 col-sm-4",
    children: /*#__PURE__*/_jsxs("div", {
      className: "card catagory-card mb-3",
      children: [/*#__PURE__*/_jsx(Link, {
        href: url,
        passHref: true,
        children: /*#__PURE__*/_jsx("img", {
          src: image,
          alt: ""
        })
      }), /*#__PURE__*/_jsx("h6", {
        children: category
      })]
    })
  });
}

/***/ }),

/***/ 41457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./components/Layout/index.jsx + 7 modules
var Layout = __webpack_require__(27540);
// EXTERNAL MODULE: ./components/PostCard/index.js
var PostCard = __webpack_require__(49390);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/SingleCard/index.js
const _excluded = (/* unused pure expression or super */ null && (["image", "url", "title", "category", "date"]));

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function index(_ref) {
  let {
    image,
    url,
    title,
    category,
    date
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("a", {
      className: "bookmark-post",
      href: "#",
      children: /*#__PURE__*/_jsx("i", {
        className: "lni lni-bookmark"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "post-thumbnail",
      children: /*#__PURE__*/_jsx("img", {
        src: image,
        alt: ""
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "post-content",
      children: [/*#__PURE__*/_jsx("a", {
        className: "post-catagory",
        href: "#",
        children: category
      }), /*#__PURE__*/_jsx("a", {
        className: "post-title d-block",
        href: url,
        children: title
      }), /*#__PURE__*/_jsxs("div", {
        className: "post-meta d-flex align-items-center",
        children: [/*#__PURE__*/_jsxs("a", {
          href: "#",
          children: [/*#__PURE__*/_jsx("i", {
            className: "mr-1 fa fa-user-o"
          }), "Nazrul"]
        }), /*#__PURE__*/_jsxs("a", {
          href: "#",
          children: [/*#__PURE__*/_jsx("i", {
            className: "mr-1 fa fa-clock-o"
          }), date]
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./components/CategoryCard/index.js




function CategoryCard({
  url,
  image,
  category,
  title,
  showModal
}) {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "card catagory-card",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
      onClick: showModal,
      children: [/*#__PURE__*/jsx_runtime.jsx("img", {
        src: image,
        alt: ""
      }), /*#__PURE__*/jsx_runtime.jsx("h6", {
        children: category
      }), title]
    })
  });
}
// EXTERNAL MODULE: ./components/Category/index.js
var Category = __webpack_require__(80789);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/next-auth/dist/client/index.js
var client = __webpack_require__(48633);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/reactstrap/dist/reactstrap.modern.js
var reactstrap_modern = __webpack_require__(50450);
;// CONCATENATED MODULE: ./pages/index.js
















function Home(props) {
  const [modal, setModal] = react.useState(false);
  const [singleContent, setSingleContent] = react.useState(null);

  const toggle = item => {
    setSingleContent(item); // setSingleContet(item)

    setModal(!modal);
  };

  const [session, loading] = (0,client/* useSession */.kP)();
  const router = (0,next_router.useRouter)(); // const refreshData = () => router.replace(router.asPath);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head["default"], {
      children: [/*#__PURE__*/jsx_runtime.jsx("title", {
        children: "Home"
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(reactstrap_modern/* Modal */.u_, {
      isOpen: modal,
      toggle: toggle,
      children: [/*#__PURE__*/jsx_runtime.jsx(reactstrap_modern/* ModalHeader */.xB, {
        toggle: toggle,
        children: "Modal title"
      }), /*#__PURE__*/jsx_runtime.jsx(reactstrap_modern/* ModalBody */.fe, {
        children: singleContent !== null ? /*#__PURE__*/jsx_runtime.jsx(PostCard/* default */.Z, {
          title: singleContent.title,
          image: singleContent.urlToImage,
          content: singleContent.content,
          date: singleContent.publishedAt
        }) : null
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(reactstrap_modern/* ModalFooter */.mz, {
        children: [/*#__PURE__*/jsx_runtime.jsx(reactstrap_modern/* Button */.zx, {
          color: "primary",
          onClick: toggle,
          children: "Do Something"
        }), " ", /*#__PURE__*/jsx_runtime.jsx(reactstrap_modern/* Button */.zx, {
          color: "secondary",
          onClick: toggle,
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "news-today-wrapper",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex align-items-center justify-content-between",
            children: [/*#__PURE__*/jsx_runtime.jsx("h5", {
              className: "mb-3 pl-1 newsten-title",
              children: "News Today"
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "mb-3 line-height-1",
                id: "dashboardDate2"
              })
            })]
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "hero-slides owl-carousel",
            children: props.news.length > 0 ? props.news.map((item, index) => {
              return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "single-hero-slide",
                  style: {
                    backgroundImage: `url(${item.urlToImage})`
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "background-shape",
                    children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                      className: "circle2"
                    }), /*#__PURE__*/jsx_runtime.jsx("div", {
                      className: "circle3"
                    })]
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "slide-content h-100 d-flex align-items-end",
                    children: /*#__PURE__*/jsx_runtime.jsx("div", {
                      className: "container-fluid mb-3",
                      children: /*#__PURE__*/jsx_runtime.jsx("a", {
                        className: "post-title d-block",
                        id: "getPost",
                        onClick: () => toggle(item),
                        children: item.title
                      })
                    })
                  })]
                }, index)
              });
            }) : /*#__PURE__*/jsx_runtime.jsx("h1", {
              children: "Not Working"
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "top-catagories-wrapper",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-shapes",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "shape1"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "shape2"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "shape3"
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("h6", {
          className: "mb-3 catagory-title",
          children: "Top Headlines"
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "container",
          children: /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "catagory-slides owl-carousel ",
            children: props.news.map((item, index) => {
              // console.log(index);
              return /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "single-trending-post d-flex",
                children: /*#__PURE__*/jsx_runtime.jsx(CategoryCard, {
                  showModal: () => toggle(item),
                  image: item.urlToImage,
                  title: item.title
                })
              }, index);
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "trending-news-wrapper",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex align-items-center justify-content-between mb-3",
            children: [/*#__PURE__*/jsx_runtime.jsx("h5", {
              className: "mb-0 pl-1 newsten-title",
              children: "Trending Sport New"
            }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/category/sport",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                className: "btn btn-danger btn-sm",
                children: "View All"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "container",
          children: props.sportNews.map((item, index) => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "single-trending-post d-flex",
              children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                className: "post-thumbnail",
                children: /*#__PURE__*/jsx_runtime.jsx("img", {
                  src: item.urlToImage,
                  alt: ""
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "post-content",
                children: [/*#__PURE__*/jsx_runtime.jsx("a", {
                  className: "post-title",
                  onClick: () => toggle(item),
                  children: item.title
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "post-meta d-flex align-items-center",
                  children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                    href: "/category/sport",
                    children: "Sports"
                  })
                })]
              })]
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "popular-tags-wrapper",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "container",
          children: /*#__PURE__*/jsx_runtime.jsx("h5", {
            className: "mb-3 pl-2 newsten-title",
            children: "Popular Tags"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "popular-tags-list",
            children: [/*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/category/politics",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                className: "btn btn-primary btn-sm m-1",
                children: "#Politics"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/category/fashion",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                className: "btn btn-primary btn-sm m-1",
                children: "#Fashion"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/category/tech",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                className: "btn btn-warning btn-sm m-1",
                children: "#Tech"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/category/lifestyle",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                className: "btn btn-danger btn-sm m-1",
                children: "#Lifestyle"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/category/sport",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                className: "btn btn-info btn-sm m-1",
                children: "#sport"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/category/world",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                className: "btn btn-success btn-sm m-1",
                children: "#world"
              })
            })]
          })
        })]
      })]
    })]
  });
}
async function getServerSideProps(context) {
  const trial = async () => {
    let result = await axios_default().get(`https://t1ti0k29ig.execute-api.us-east-1.amazonaws.com/dev/`);
    return result.data;
  };

  const sport = async () => {
    let result = await axios_default().get(`https://t1ti0k29ig.execute-api.us-east-1.amazonaws.com/dev/?category=sport`);
    return result.data;
  };

  const getSport = await sport();
  const getNews = await trial();
  const sportNews = getSport.message.articles;
  const news = getNews.message.articles; //   const sportNews = [{
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
      sportNews
    }
  };
}

/***/ }),

/***/ 82648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.local","contents":"COGNITO_ID=4f1invjtmkaq422k2c4ejribtj\r\nCOGNITO_SECRET=goaoqj3ghvvn1cddb55b5qdhq24fl4fratqhr14hf2vtrgstjv2\r\nCOGNITO_DOMAIN=newsapp.auth.us-east-1.amazoncognito.com\r\nNEXTAUTH_URL=http://localhost:3000"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(18613)

      const appMod = __webpack_require__(62551)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(41457)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(70700),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/",
        buildId: "DqyY6lFquhdOIymROVNKL",
        escapedBuildId: "DqyY6lFquhdOIymROVNKL",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"e5aabcfc2ce606f81582caf0ecd7e725",previewModeSigningKey:"af7edbc7a13ebabaf3791af0fa675756b72b7834997a8920fb26aeffdd471345",previewModeEncryptionKey:"fe743c3273284a57560a8cba08e2a78af8fd14144d2731090891f81a14f02bc7"}
      })
      
    

/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [734,516,730,675,578,685,540,390], () => (__webpack_exec__(82648)));
module.exports = __webpack_exports__;

})();