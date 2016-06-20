/**
 * A link to a certain page, an anchor tag
 */

import React, { PropTypes } from 'react';

import styles from './styles.css';

function A(props) {
  return (
    <a
      className={
        props.className || styles.link
      }
      onClick={evt => {
        if (this.props.onClick) {
          evt.preventDefault()
          this.props.onClick()
        }
      }}
      { ...props }
    />
  );
}

A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default A;
