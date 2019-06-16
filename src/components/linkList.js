import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from 'react-icons-kit';
import PropTypes from 'prop-types'
import Link  from "./link";


/** Creates a list of links with optional name and icon. The icons have to be a react-icons-kit icon. */
const LinkList = ({links, className, size, onClick}) => (
  <List>
    {
      links.filter(link => link.type !== "config")
           .map(({icon, name, url}, index) => {
              return (
                <ListItem button key={index} className={className} component={Link} to={url} onClick={onClick}>
                  {icon && <ListItemIcon><Icon icon={icon} size={size}/></ListItemIcon>}
                  {name && <ListItemText primary={name} />}
                </ListItem>
              )
            })
    }
  </List>
)
LinkList.propTypes = {
  /** Array of links */
  links: PropTypes.arrayOf(PropTypes.shape({
    /** Link Url. Can be external or relative. */
    url: PropTypes.string.isRequired,
    /** A react-icon-kit icon. Optional. */
    icon: PropTypes.bool,
    /** The link text. Optional. */
    name: PropTypes.string,
  })).isRequired,
  /** Class name to apply to each list item */
  className: PropTypes.string,
  /** The size of the icon. Default is 28. */
  size: PropTypes.number,
  /** Function called on list item click */
  onClick: PropTypes.func
};

LinkList.defaultProps = {
  size: 28,
  className: "nav-link"
}

export default LinkList;