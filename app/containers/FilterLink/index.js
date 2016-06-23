/*
 *
 * FilterLink
 * Allows filtering the visible todos
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from './actions'
import styles from './styles.css'

const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      className={styles.filterLink}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
