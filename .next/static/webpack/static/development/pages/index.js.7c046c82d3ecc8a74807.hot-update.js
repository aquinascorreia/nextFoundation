webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/styles.scss */ "./css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/ButtonToolbar */ "./node_modules/react-bootstrap/esm/ButtonToolbar.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var PostLink = function PostLink(props) {
  return __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(props.id)
  }, __jsx("a", null, props.title)));
};

var Index = function Index(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("p", {
    className: _css_styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.example
  }, "Hello Next.js"), __jsx("h1", null, "My blog"), __jsx("ul", null, __jsx(PostLink, {
    id: "hello-nextjs",
    title: "Hello nextjs"
  }), __jsx(PostLink, {
    id: "learn-nextjs",
    title: "Learn nextjs"
  }), __jsx(PostLink, {
    id: "deploy-nextjs",
    title: "Deploy nextjs"
  })), __jsx(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "danger"
  }, "Danger")), __jsx("h2", null, "Fetching data from external API"), __jsx("ul", null, props.msgs.map(function (mg) {
    return __jsx("li", {
      key: mg.UniqueMessageId
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(mg.UniqueMessageId)
    }, __jsx("a", null, mg.UniqueMessageId)));
  })), __jsx("h1", null, "By using custom server route listening"), __jsx("ul", null, props.msgs.map(function (mg) {
    return __jsx("li", {
      key: mg.UniqueMessageId
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/post?UniqueMessageId=".concat(mg.UniqueMessageId),
      href: "/post?UniqueMessageId=".concat(mg.UniqueMessageId)
    }, __jsx("a", {
      style: {
        'fontSize': '20px'
      }
    }, mg.UniqueMessageId)));
  })));
};

Index.getInitialProps = function _callee() {
  var account_token, user_token, groupid, profileid, res, insta, data, posts;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          account_token = 'PT8YzkMO74fPqt8GoAD0+5EpkAdH6WTJ';
          user_token = 'gzSRj2TyEhnPqt8GoAD0+wymZArbWes0';
          groupid = '1560761320';
          profileid = '362460000';
          res = '';
          insta = '';
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('http://api.konnectinsights.com/v2.0/SocialMessages/Twitter?account_token=' + account_token + '&groupid=' + groupid + '&user_token=' + user_token + '&profileid=' + profileid + '&since=2020-01-11%2000:00:00&until=2020-01-17%2023:59:59&resultType=json&limit=5&sortby=date&sort=desc'));

        case 8:
          res = _context.sent;
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://graph.facebook.com/17841593698074073/recent_media?user_id=17841429712936619&access_token=EAAoush5u3f4BAF9beMg4ThyobDvHJTotZAhQDXGwOxTpF5p9zAMT0oCNlHDizAbZBTZCNmOofwbtopBRCppSohdClaumKA7OoSVt1ZAZB62CNHAJRTZAWx38yrRHRtPde1YjGT6N0qeWahTL3LNeFZCO8kZC2N7XashahNFeOQrPIJjWTVtpffArzwwK5FpVQKcZD&fields=id,caption,comments_count,like_count,media_type,media_url,permalink,children{media_url,id}'));

        case 11:
          insta = _context.sent;
          _context.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 14:
          data = _context.sent;
          _context.next = 17;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(insta.json());

        case 17:
          posts = _context.sent;
          console.log(posts); //console.log(data.docs);
          //console.log(`msgs data fetched. Count : ${data.docs.length}`);

          return _context.abrupt("return", {
            msgs: data.docs,
            posts: posts.data
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7c046c82d3ecc8a74807.hot-update.js.map