"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(_stylesModule.default.view, className),
    style: style
  });
};

exports.default = _default;