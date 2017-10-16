webpackJsonp([1],{

/***/ "./node_modules/css-loader/index.js!./src/containers/Post/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n  color: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n  color: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #8959a8;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: white;\n  color: #4d4d4c;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.post-loading h1 {\n  height: 60px;\n  width: 60%;\n  background-color: rgba(255,255,255,.5);\n  border-radius: 4px;\n}\n.post-loading h2 {\n  height: 33px;\n  width: 45%;\n  background-color: rgba(255,255,255,.5);\n  border-radius: 4px;\n}\n.post-loading span {\n  height: 22px;\n  width: 30%;\n  background-color: rgba(255,255,255,.5);\n  border-radius: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/containers/Post/index.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./src/containers/Post/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/Post/index.js":
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

__webpack_require__("./src/containers/Post/index.css");

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
                { className: 'col align-self-center' },
                _react2.default.createElement(
                  'div',
                  {
                    className: model.content ? 'post-heading' : 'post-heading post-loading'
                  },
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
                    model.content && _react2.default.createElement(
                      'div',
                      null,
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
                className: 'col align-self-center',
                dangerouslySetInnerHTML: { __html: model.content }
              }) : _react2.default.createElement(
                'div',
                { className: 'col align-self-center' },
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

exports.default = Post;

/***/ })

});