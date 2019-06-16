import React, { Component } from 'react';
import { Link as RLink} from '@reach/router';
import isExternal from 'is-url-external';
import PropTypes from 'prop-types'

const useHref = (link) => {
  return isExternal(link) || /mailto:.*/.test(link);
}

/**
 * Wrapper Component for @reach/router
 * Link that works for external URLs and mailto URLs.
 * 
 */
class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    /** If true, external link will not open in new tab. */
    notab: PropTypes.bool
  };
  render() {
    return useHref(this.props.to) ?
      <a
        href={this.props.to}
        {...this.props}
        target={!this.props.notab && "_blank"}
      />
      :
      <RLink {...this.props} />;
  }
}

export default Link