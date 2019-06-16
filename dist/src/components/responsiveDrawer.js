"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _reactDeviceDetect = require("react-device-detect");

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsiveDrawerInner = _interopRequireDefault(require("./responsiveDrawerInner"));

var _linkList = _interopRequireDefault(require("./linkList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n&& {\n    background-color: rgba(0, 0, 0, 0);\n    width: unset;\n    right: unset;\n    box-shadow: unset;\n    left: 1rem;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var modes = {
  closed: 'closed',
  open: 'open',
  mini: 'mini'
  /** A responsive drawer component, with a closed (hamburger menu), open (full menu),
   * and mini (only icons) states. If the site is loaded on a browser the drawer will be closed
   * until hamburger menu is clicked. Once it is opened it will remain open until a link is clicked,
   * or the outside of the menu is tapped. In Desktop mode the drawer starts minified.
   * If the drawer is hovered on it will be open until it is no longer hovered on.
   */

};

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      mode: null
    });

    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_reactDeviceDetect.isMobile) this.handleModeChange(modes.closed);else this.handleModeChange(modes.mini);
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      this.handleModeChange(modes.open);
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      if (_reactDeviceDetect.isMobile) this.handleModeChange(modes.closed);else this.handleModeChange(modes.mini);
    }
  }, {
    key: "onLinkClick",
    value: function onLinkClick() {
      var _this2 = this;

      if (_reactDeviceDetect.isMobile) setTimeout(function () {
        return _this2.handleModeChange(modes.closed);
      }, 100);
    }
  }, {
    key: "handleModeChange",
    value: function handleModeChange(mode) {
      this.setState({
        mode: mode
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      if (!_reactDeviceDetect.isMobile) this.handleModeChange(modes.mini);else this.handleModeChange(modes.closed);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactDeviceDetect.MobileView, null, _react["default"].createElement(StyledAppBar, {
        position: "fixed"
      }, _react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        "aria-label": "Open drawer",
        edge: "start",
        onClick: this.handleModeChange.bind(this, modes.open)
      }, _react["default"].createElement(_Menu["default"], null)))), _react["default"].createElement("nav", {
        "aria-label": "Navigation",
        onMouseEnter: this.onMouseEnter.bind(this),
        onMouseLeave: this.onMouseLeave.bind(this)
      }, _react["default"].createElement(_responsiveDrawerInner["default"], {
        onClose: this.handleClose.bind(this),
        open: this.state.mode !== modes.closed,
        className: this.state.mode,
        variant: "permanent",
        withClickAway: this.state.mode === modes.open,
        theme: this.props.theme
      }, this.props.links && this.props.links.map(function (linkList, index) {
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_linkList["default"], {
          links: linkList,
          onClick: linkList[0].config && linkList[0].config.closeOnClick && _this3.onLinkClick.bind(_this3)
        }), index !== linkList.length - 1 && _react["default"].createElement(_Divider["default"], null));
      }))));
    }
  }]);

  return Header;
}(_react.Component);

_defineProperty(Header, "propTypes", {
  /** Material UI theme */
  theme: _propTypes["default"].object.isRequired,

  /** 2D array of links. Each inner array is separated by a divider. 
   * An example of this may be an array of page links and a page of social links. */
  links: _propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].object)).isRequired
});

var StyledAppBar = (0, _styledComponents["default"])(_AppBar["default"])(_templateObject());
var _default = Header;
exports["default"] = _default;

//# sourceMappingURL=responsiveDrawer.js.map