"use strict";
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 62551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48633);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
const _excluded = ["session"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







if (false) {}

function App(_ref) {
  let {
    Component,
    pageProps: {
      session
    }
  } = _ref,
      pageProps = _objectWithoutProperties(_ref.pageProps, _excluded);

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    Promise.all(/* import() */[__webpack_require__.e(734), __webpack_require__.e(516)]).then(__webpack_require__.t.bind(__webpack_require__, 43734, 23));
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_auth_client__WEBPACK_IMPORTED_MODULE_0__/* .Provider */ .zt, {
    session: session,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Component, _objectSpread({}, pageProps))
  });
}

/***/ }),

/***/ 70700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12918);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);



function Page({
  statusCode
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_error__WEBPACK_IMPORTED_MODULE_0__["default"], {
    statusCode: statusCode
  });
}

Page.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/DqyY6lFquhdOIymROVNKL/_buildManifest.js","static/DqyY6lFquhdOIymROVNKL/_ssgManifest.js","static/DqyY6lFquhdOIymROVNKL/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-1ec8839c8544cb3f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f13881c64383263e.js","static/chunks/8710b798-ef944a9d973f7aee.js","static/chunks/804-8dbda34e3b1277f0.js","static/chunks/35-69cae6774c33cbd4.js","static/chunks/635-c738172fa0b4bc99.js","static/chunks/pages/index-f18e061291ce1119.js"],"/_app":["static/chunks/webpack-1ec8839c8544cb3f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f13881c64383263e.js","static/css/f93f38727394d147.css","static/chunks/pages/_app-306bc9adc39ffb14.js"],"/_error":["static/chunks/webpack-1ec8839c8544cb3f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f13881c64383263e.js","static/chunks/pages/_error-fe7f3288dc8f4a12.js"],"/bookmark":["static/chunks/webpack-1ec8839c8544cb3f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f13881c64383263e.js","static/chunks/8710b798-ef944a9d973f7aee.js","static/chunks/804-8dbda34e3b1277f0.js","static/chunks/35-69cae6774c33cbd4.js","static/chunks/635-c738172fa0b4bc99.js","static/chunks/pages/bookmark-7ca03041bdec6396.js"],"/category":["static/chunks/webpack-1ec8839c8544cb3f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f13881c64383263e.js","static/chunks/35-69cae6774c33cbd4.js","static/chunks/pages/category-b108ba2c016964f0.js"],"/category/[name]":["static/chunks/webpack-1ec8839c8544cb3f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f13881c64383263e.js","static/chunks/8710b798-ef944a9d973f7aee.js","static/chunks/804-8dbda34e3b1277f0.js","static/chunks/35-69cae6774c33cbd4.js","static/chunks/635-c738172fa0b4bc99.js","static/chunks/pages/category/[name]-fe270323c85b2de5.js"],"/trending":["static/chunks/webpack-1ec8839c8544cb3f.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f13881c64383263e.js","static/chunks/8710b798-ef944a9d973f7aee.js","static/chunks/75fc9c18-4d2f0a9f494a9dad.js","static/chunks/804-8dbda34e3b1277f0.js","static/chunks/35-69cae6774c33cbd4.js","static/chunks/635-c738172fa0b4bc99.js","static/chunks/pages/trending-df1b8b9fab659661.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = JSON.parse('{"..\\\\node_modules\\\\next\\\\dist\\\\client\\\\index.js -> ../pages/_error":{"id":9651,"files":["static/chunks/651.e7ad805f32a091cd.js"]},"_app.js -> bootstrap/dist/js/bootstrap":{"id":3734,"files":["static/chunks/804-8dbda34e3b1277f0.js","static/chunks/734.8e03678f95393d15.js"]}}');

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;