"use strict";
exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 27540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
;// CONCATENATED MODULE: ./assets/img/core-img/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a43caf2b.png","height":18,"width":143,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKUlEQVR4nGP8rMey/BMD87d/DIyCjAz/f/xnYOBgZGC4w8DAIAxkSwEAwr0J0fKyz88AAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Header/index.jsx







function Header() {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "header-area",
    id: "headerArea",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container h-100 d-flex align-items-center justify-content-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "navbar--toggler",
        id: "newstenNavbarToggler",
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {}), /*#__PURE__*/jsx_runtime.jsx("span", {}), /*#__PURE__*/jsx_runtime.jsx("span", {}), /*#__PURE__*/jsx_runtime.jsx("span", {})]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "logo-wrapper",
        children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime.jsx("img", {
            src: logo.src
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "search-form",
        children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "fa fa-search"
          })
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/PageHeader/index.js





function Pageheader({
  title
}) {
  const router = (0,next_router.useRouter)();

  const handleClick = e => {
    e.preventDefault();
    router.back();
  };

  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "header-area",
    id: "headerArea",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container h-100 d-flex align-items-center justify-content-between",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "back-button",
        children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: "#",
          onClick: handleClick,
          children: /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "lni lni-chevron-left"
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "page-heading",
        children: /*#__PURE__*/jsx_runtime.jsx("h6", {
          className: "mb-0",
          children: title
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "search-form",
        children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: "/",
          children: /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "fa fa-search"
          })
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Footer/index.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Footer() {
  const router = (0,next_router.useRouter)(); // console.log(router)

  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "footer-nav-area",
      id: "footerNav",
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "newsten-footer-nav h-100",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          className: "h-100 d-flex align-items-center justify-content-between",
          children: [/*#__PURE__*/jsx_runtime.jsx("li", _objectSpread(_objectSpread({}, router.pathname == "/" ? `className="active"` : null), {}, {
            children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                children: /*#__PURE__*/jsx_runtime.jsx("i", {
                  className: "lni lni-home"
                })
              })
            })
          })), /*#__PURE__*/jsx_runtime.jsx("li", _objectSpread(_objectSpread({}, router.pathname == "category" ? `className="active"` : null), {}, {
            children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/category",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                children: /*#__PURE__*/jsx_runtime.jsx("i", {
                  className: "lni lni-grid-alt"
                })
              })
            })
          })), /*#__PURE__*/jsx_runtime.jsx("li", _objectSpread(_objectSpread({}, router.pathname == "trending" ? `className="active"` : null), {}, {
            children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/trending",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                children: /*#__PURE__*/jsx_runtime.jsx("i", {
                  className: "lni lni-bolt-alt"
                })
              })
            })
          })), /*#__PURE__*/jsx_runtime.jsx("li", _objectSpread(_objectSpread({}, router.pathname == "bookmark" ? `className="active"` : null), {}, {
            children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/bookmark",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                children: /*#__PURE__*/jsx_runtime.jsx("i", {
                  className: "lni lni-bookmark"
                })
              })
            })
          }))]
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Loader/index.js


function Loader() {
  return /*#__PURE__*/_jsx("div", {
    className: "preloader",
    id: "preloader",
    children: /*#__PURE__*/_jsx("div", {
      className: "spinner-grow text-secondary",
      role: "status",
      children: /*#__PURE__*/_jsx("div", {
        className: "sr-only",
        children: "Loading..."
      })
    })
  });
}
;// CONCATENATED MODULE: ./assets/img/bg-img/1.jpg
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.8ee2c8d9.jpg","height":563,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAIhH/8QAHRAAAQIHAAAAAAAAAAAAAAAAAgAEAwUREiFSwf/aAAgBAQABPwCYwGJNbgbkGN68X//EABoRAAICAwAAAAAAAAAAAAAAAAECAwQAEVH/2gAIAQIBAT8Ar3rbwoWlJOuDP//EABoRAAICAwAAAAAAAAAAAAAAAAEDAgQAEXH/2gAIAQMBAT8AdSrLZIQXrhOf/9k="});
// EXTERNAL MODULE: ./node_modules/next-auth/dist/client/index.js
var client = __webpack_require__(48633);
;// CONCATENATED MODULE: ./components/SidebarNav/index.jsx







function SidebarNav() {
  const [session, loading] = (0,client/* useSession */.kP)(); // console.log(session);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "sidenav-wrapper",
    id: "sidenavWrapper",
    children: [/*#__PURE__*/jsx_runtime.jsx("div", {
      className: "time-date-weather-wrapper text-center py-5",
      style: {
        backgroundImage: `url(${_1})`
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      className: "sidenav-nav",
      children: [/*#__PURE__*/jsx_runtime.jsx("li", {
        children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            children: [/*#__PURE__*/jsx_runtime.jsx("i", {
              className: "lni lni-play"
            }), "Live", /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "red-circle ml-2 flashing-effect"
            })]
          })
        })
      }), session ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/jsx_runtime.jsx("li", {
          children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: "/profile",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime.jsx("i", {
                className: "lni lni-user"
              }), "Profile"]
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx("li", {
          children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: "/bookmark",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime.jsx("i", {
                className: "lni lni-cog"
              }), "Bookmark"]
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx("li", {
          children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: "/comment",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime.jsx("i", {
                className: "lni lni-cog"
              }), "Comments"]
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx("li", {
          children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
              onClick: () => (0,client/* signOut */.w7)(),
              children: [/*#__PURE__*/jsx_runtime.jsx("i", {
                className: "lni lni-power-switch"
              }), "Sign Out"]
            })
          })
        })]
      }) : /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/jsx_runtime.jsx("li", {
          children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
              onClick: () => (0,client/* signIn */.zB)(),
              children: [/*#__PURE__*/jsx_runtime.jsx("i", {
                className: "lni lni-power-switch"
              }), "Log In"]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx("li", {
        children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: "/category",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            children: [/*#__PURE__*/jsx_runtime.jsx("i", {
              className: "lni lni-grid-alt"
            }), "All Category", " ", /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "ml-2 badge badge-warning",
              children: "14+"
            })]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "go-home-btn",
      id: "goHomeBtn",
      children: /*#__PURE__*/jsx_runtime.jsx("i", {
        className: "lni lni-arrow-left"
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/Layout/index.jsx










function Layout({
  children,
  title
}) {
  const [toggle, setToggle] = react.useState(false);
  const router = (0,next_router.useRouter)();

  const Navigation = ({
    title
  }) => {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
      children: router.pathname == "/" ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/jsx_runtime.jsx(Header, {}), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "sidenav-black-overlay"
        }), /*#__PURE__*/jsx_runtime.jsx(SidebarNav, {})]
      }) : /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/jsx_runtime.jsx(Pageheader, {
          title: title
        })
      })
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Navigation, {
      title: title
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "page-content-wrapper",
      children: children
    }), /*#__PURE__*/jsx_runtime.jsx(Footer, {})]
  });
}

/***/ })

};
;