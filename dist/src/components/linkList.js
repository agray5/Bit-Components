"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _reactIconsKit = _interopRequireDefault(require("react-icons-kit"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _link = _interopRequireDefault(require("./link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Creates a list of links with optional name and icon. The icons have to be a react-icons-kit icon. */
var LinkList = function LinkList(_ref) {
  var links = _ref.links,
      className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return _react["default"].createElement(_List["default"], null, links.filter(function (link) {
    return link.type !== "config";
  }).map(function (_ref2, index) {
    var icon = _ref2.icon,
        name = _ref2.name,
        url = _ref2.url;
    return _react["default"].createElement(_ListItem["default"], {
      button: true,
      key: index,
      className: className,
      component: _link["default"],
      to: url,
      onClick: onClick
    }, icon && _react["default"].createElement(_ListItemIcon["default"], null, _react["default"].createElement(_reactIconsKit["default"], {
      icon: icon,
      size: size
    })), name && _react["default"].createElement(_ListItemText["default"], {
      primary: name
    }));
  }));
};

LinkList.propTypes = {
  /** Array of links */
  links: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    /** Link Url. Can be external or relative. */
    url: _propTypes["default"].string.isRequired,

    /** A react-icon-kit icon. Optional. */
    icon: _propTypes["default"].bool,

    /** The link text. Optional. */
    name: _propTypes["default"].string
  })).isRequired,

  /** Class name to apply to each list item */
  className: _propTypes["default"].string,

  /** The size of the icon. Default is 28. */
  size: _propTypes["default"].number,

  /** Function called on list item click */
  onClick: _propTypes["default"].func
};
LinkList.defaultProps = {
  size: 28,
  className: "nav-link"
};
var _default = LinkList;
exports["default"] = _default;

//# sourceMappingURL=linkList.js.map