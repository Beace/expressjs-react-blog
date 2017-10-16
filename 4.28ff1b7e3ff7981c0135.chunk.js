webpackJsonp([4],{

/***/ "./src/components/Contacts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contacts = function Contacts() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "header",
      { className: "intro-header contact-bg" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col align-self-center" },
            _react2.default.createElement(
              "div",
              { className: "page-heading" },
              _react2.default.createElement(
                "h1",
                null,
                "Contact Me"
              ),
              _react2.default.createElement("hr", { className: "small" }),
              _react2.default.createElement(
                "span",
                { className: "subheading" },
                "Have questions? I have answers (maybe)."
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col align-self-center" },
          _react2.default.createElement(
            "p",
            null,
            "Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you within 24 hours!"
          ),
          _react2.default.createElement(
            "form",
            { name: "sentMessage", id: "contactForm", noValidate: true },
            _react2.default.createElement(
              "div",
              { className: "row control-group" },
              _react2.default.createElement(
                "div",
                { className: "form-group col-xs-12 floating-label-form-group controls" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "name" },
                  "Name"
                ),
                _react2.default.createElement("input", {
                  type: "text",
                  name: "name",
                  className: "form-control",
                  placeholder: "Name",
                  id: "name",
                  required: true,
                  "data-validation-required-message": "Please enter your name."
                }),
                _react2.default.createElement("p", { className: "help-block text-danger" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row control-group" },
              _react2.default.createElement(
                "div",
                { className: "form-group col-xs-12 floating-label-form-group controls" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "email" },
                  "Email Address"
                ),
                _react2.default.createElement("input", {
                  type: "email",
                  name: "name",
                  className: "form-control",
                  placeholder: "Email Address",
                  id: "email",
                  required: true,
                  "data-validation-required-message": "Please enter your email address."
                }),
                _react2.default.createElement("p", { className: "help-block text-danger" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row control-group" },
              _react2.default.createElement(
                "div",
                { className: "form-group col-xs-12 floating-label-form-group controls" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "tel" },
                  "Phone Number"
                ),
                _react2.default.createElement("input", {
                  type: "tel",
                  name: "tel",
                  className: "form-control",
                  placeholder: "Phone Number",
                  id: "phone",
                  required: true,
                  "data-validation-required-message": "Please enter your phone number."
                }),
                _react2.default.createElement("p", { className: "help-block text-danger" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row control-group" },
              _react2.default.createElement(
                "div",
                { className: "form-group col-xs-12 floating-label-form-group controls" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "message" },
                  "Message"
                ),
                _react2.default.createElement("textarea", {
                  rows: "5",
                  name: "message",
                  className: "form-control",
                  placeholder: "Message",
                  id: "message",
                  required: true,
                  "data-validation-required-message": "Please enter a message."
                }),
                _react2.default.createElement("p", { className: "help-block text-danger" })
              )
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement("div", { id: "success" }),
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "form-group col-xs-12" },
                _react2.default.createElement(
                  "button",
                  { type: "submit", className: "btn btn-default" },
                  "Send"
                )
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Contacts;

/***/ })

});