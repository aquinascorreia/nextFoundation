webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./node_modules/dom-helpers/esm/camelize.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/camelize.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return camelize; });
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Button.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ButtonToolbar.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Card.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");
/* harmony import */ var _divWithClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/esm/divWithClassName.js");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/esm/CardContext.js");
/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/esm/CardImg.js");









var DivStyledAsH5 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h5');
var DivStyledAsH6 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h6');
var CardBody = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-body');
var defaultProps = {
  body: false
};
var Card = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card');
  var cardContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CardContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: cardContext
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardBody, null, children) : children));
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg__WEBPACK_IMPORTED_MODULE_8__["default"];
Card.Title = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-title', {
  Component: DivStyledAsH5
});
Card.Subtitle = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-subtitle', {
  Component: DivStyledAsH6
});
Card.Body = CardBody;
Card.Link = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-link', {
  Component: 'a'
});
Card.Text = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-text', {
  Component: 'p'
});
Card.Header = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-header');
Card.Footer = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-footer');
Card.ImgOverlay = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-img-overlay');
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardContext.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardImg.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");





var defaultProps = {
  variant: null
};
var CardImg = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "variant", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card-img');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (CardImg);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/SafeAnchor.js":
false,

/***/ "./node_modules/react-bootstrap/esm/createChainedFunction.js":
false,

/***/ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/createWithBsPrefix.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWithBsPrefix; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/camelize */ "./node_modules/dom-helpers/esm/camelize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");







var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + Object(dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__["default"])(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["className", "bsPrefix", "as"]);

    var resolvedPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, prefix);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, resolvedPrefix)
    }, props));
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/divWithClassName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (className) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (p, ref) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(p.className, className)
    }));
  });
});

/***/ }),

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
    return __jsx("li", {
      key: ps.id
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        width: '18rem'
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Img, {
      variant: "top",
      src: "holder.js/100px180"
    }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Title, null, "Card Title"), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Text, null, ps.caption), __jsx(Button, {
      variant: "primary"
    }, "Go somewhere"))));
  })));
}

/***/ })

})
//# sourceMappingURL=blog.js.7d3d9fb104821c577784.hot-update.js.map