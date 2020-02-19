"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Skeleton = _interopRequireDefault(require("./Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Skeleton', module).add('square', function () {
  return _react.default.createElement(_Skeleton.default, {
    style: {
      height: '24px',
      width: '24px'
    }
  });
}).add('rounded square', function () {
  return _react.default.createElement(_Skeleton.default, {
    style: {
      borderRadius: '4px',
      height: '24px',
      width: '24px'
    }
  });
}).add('round', function () {
  return _react.default.createElement(_Skeleton.default, {
    style: {
      borderRadius: '12px',
      height: '24px',
      width: '24px'
    }
  });
});