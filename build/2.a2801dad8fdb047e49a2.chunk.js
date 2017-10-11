webpackJsonp([2],{

/***/ "./src/containers/NewsPage/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _fetch = __webpack_require__("./src/fetch/index.js");

var _fetch2 = _interopRequireDefault(_fetch);

var _Header = __webpack_require__("./src/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Loading = __webpack_require__("./src/components/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsPage = function (_React$Component) {
  _inherits(NewsPage, _React$Component);

  function NewsPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewsPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewsPage.__proto__ || Object.getPrototypeOf(NewsPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      data: [],
      error: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewsPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _fetch2.default.getNews('top').then(function (data) {
        _this2.setState({
          data: data.result.data
        });
      }).catch(function (error) {
        _this2.setState({
          error: error
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.data;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        data.length === 0 && _react2.default.createElement(_Loading2.default, null),
        _react2.default.createElement(
          'ul',
          null,
          data.map(function (item) {
            return _react2.default.createElement(
              'li',
              { key: item.uniquekey },
              _react2.default.createElement(
                'a',
                { href: item.url },
                item.title
              ),
              _react2.default.createElement(
                'p',
                null,
                'author: ',
                item.author_name,
                ' date: ',
                item.date
              ),
              _react2.default.createElement(
                'p',
                null,
                'type: ',
                item.category
              ),
              _react2.default.createElement('img', { src: item.thumbnail_pic_s, style: { width: 200 } })
            );
          })
        )
      );
    }
  }]);

  return NewsPage;
}(_react2.default.Component);

var _default = NewsPage;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NewsPage, 'NewsPage', '/Users/beace/Documents/beace/github/expressjs-react-blog/src/containers/NewsPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/beace/Documents/beace/github/expressjs-react-blog/src/containers/NewsPage/index.js');
}();

;

/***/ })

});