"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n&& {\n  & .nav-link:hover,.Mui-selected {\n      color: ", ";\n\n      & svg {\n        color: ", ";\n      }\n    }\n\n  & > div {\n    background-color: ", ";\n\n    & svg {\n      color: ", ";\n    }\n  }\n\n  &.closed > div {\n    width: 0;\n    transition: ", "\n  }\n\n\n  &.open > div {\n    width: ", "px;\n    transition: ", "\n  }\n\n\n\n  &.mini > div{\n    overflow-x: hidden;\n    width: ", "px;\n    transition: ", ";\n        \n    ", " {\n      width: ", "px;\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** Style Wrapper for Responsive Drawer. Provides styles for open, closed, 
 * and mini state. Also listens 
 */
var StyledDrawer = (0, _styledComponents["default"])(_Drawer["default"])(_templateObject(), function (props) {
  return props.theme.palette.accent.main;
}, function (props) {
  return props.theme.palette.accent.main;
}, function (props) {
  return props.theme.palette.secondary.main;
}, function (props) {
  return props.theme.palette.primary.main;
}, function (props) {
  return props.theme.transitions.create('width', {
    easing: props.theme.transitions.easing.easeOut,
    duration: props.theme.transitions.duration.standard
  });
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.transitions.create('width', {
    easing: props.theme.transitions.easing.easeIn,
    duration: props.theme.transitions.duration.standard
  });
}, function (props) {
  return props.theme.spacing(7) + 1;
}, function (props) {
  return props.theme.transitions.create('width', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.standard
  });
}, function (props) {
  return [props.theme.breakpoints.up('sm')];
}, function (props) {
  return props.theme.spacing(9) + 1;
});

function withListener(WrappedComponent) {
  return function (props) {
    return _react["default"].createElement(_react["default"].Fragment, null, props.withClickAway ? _react["default"].createElement(_ClickAwayListener["default"], {
      onClickAway: props.onClose
    }, _react["default"].createElement(WrappedComponent, props)) : _react["default"].createElement(WrappedComponent, props));
  };
}

var WrappedComponent = withListener(StyledDrawer);
WrappedComponent.propTypes = {
  theme: _propTypes["default"].object.isRequired,

  /** Drawer width in pixels */
  width: _propTypes["default"].number,

  /** Is called  when mouse leaves drawer. */
  onClose: _propTypes["default"].func.isRequired
};
WrappedComponent.defaultProps = {
  width: 240
};
var _default = WrappedComponent;
exports["default"] = _default;

//# sourceMappingURL=responsiveDrawerInner.js.map