webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




Blog.getInitialProps = function _callee() {
  var insta, posts;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          insta = '';
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('https://graph.facebook.com/17841593698074073/recent_media?user_id=17841429712936619&access_token=EAAoush5u3f4BAF9beMg4ThyobDvHJTotZAhQDXGwOxTpF5p9zAMT0oCNlHDizAbZBTZCNmOofwbtopBRCppSohdClaumKA7OoSVt1ZAZB62CNHAJRTZAWx38yrRHRtPde1YjGT6N0qeWahTL3LNeFZCO8kZC2N7XashahNFeOQrPIJjWTVtpffArzwwK5FpVQKcZD&fields=id,caption,comments_count,like_count,media_type,media_url,permalink,children{media_url,id}'));

        case 3:
          insta = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(insta.json());

        case 6:
          posts = _context.sent;
          console.log(posts.data);
          return _context.abrupt("return", {
            posts: posts.data
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

function Blog(props) {
  console.log(props);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("h1", null, "This is the blog page"), __jsx("h2", null, "By using custom server route listening"), __jsx("ul", null, props.posts.map(function (ps) {
    return __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        width: '20rem',
        height: '15 rem'
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Img, {
      variant: "top",
      src: ps.media_url
    }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Title, null, "Card Title"), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Text, null, ps.caption), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "primary"
    }, "Go somewhere")));
  })));
}

/***/ })

})
//# sourceMappingURL=blog.js.27e20b79b43d5e2f170b.hot-update.js.map