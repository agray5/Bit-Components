import React, { Component } from 'react';
import { Link } from '@reach/router';
import isExternal from 'is-url-external';
import PropTypes from 'prop-types'

const propTypes = {
  to: PropTypes.string.isRequired,
};

const useHref = (link) => {
  return isExternal(link) || /mailto:.*/.test(link);
}

/**
 * Link that also works for external URL's
 */
export default class LinkDuo extends Component {
  render() {
    return useHref(this.props.to) ?
      <a
        href={this.props.to}
        {...this.props}
        target={!this.props.notab && "_blank"}
      />
      :
      <Link {...this.props} />;
  }
}

LinkDuo.propTypes = propTypes;