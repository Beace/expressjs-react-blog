webpackJsonp([2],{

/***/ "./src/containers/NotMatch/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__("./src/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotMatch = function NotMatch() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'container text-center' },
      '404 NOMATCH'
    )
  );
};

var _default = NotMatch;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotMatch, 'NotMatch', '/Users/beace/Documents/beace/github/expressjs-react-blog/src/containers/NotMatch/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/beace/Documents/beace/github/expressjs-react-blog/src/containers/NotMatch/index.js');
}();

;

/***/ })

});