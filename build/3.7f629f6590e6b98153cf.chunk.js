webpackJsonp([3],{

/***/ "./src/components/Post.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Loading = __webpack_require__("./src/components/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

var _fetch = __webpack_require__("./src/fetch/index.js");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_Component) {
  _inherits(Post, _Component);

  function Post(props) {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

    _this.state = {
      model: {
        author: null,
        content: null,
        title: null,
        date: null
      }
    };
    return _this;
  }

  _createClass(Post, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var id = this.props.params.id;
      _fetch2.default.get('api/post/' + id).then(function (model) {
        _this2.setState({
          model: model
        });
      }).catch(function (error) {
        throw error;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var model = this.state.model;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { className: 'intro-header post-header-bg' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1' },
                _react2.default.createElement(
                  'div',
                  { className: 'post-heading' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    model.title
                  ),
                  _react2.default.createElement(
                    'h2',
                    { className: 'subheading' },
                    model.abstract
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'meta' },
                    'Posted by ',
                    _react2.default.createElement(
                      'a',
                      null,
                      model.author
                    ),
                    ' on',
                    ' ',
                    model.date ? model.date.substring(0, 10) : ''
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'article',
          null,
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              model.content ? _react2.default.createElement('div', {
                className: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1',
                dangerouslySetInnerHTML: { __html: model.content }
              }) : _react2.default.createElement(
                'div',
                { className: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1' },
                _react2.default.createElement(_Loading2.default, null)
              )
            )
          )
        )
      );
    }
  }]);

  return Post;
}(_react.Component);

Post.propTypes = {
  params: _propTypes2.default.object
};

var _default = Post;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Post, 'Post', '/Users/beace/Documents/beace/github/expressjs-react-blog/src/components/Post.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/beace/Documents/beace/github/expressjs-react-blog/src/components/Post.js');
}();

;

/***/ })

});