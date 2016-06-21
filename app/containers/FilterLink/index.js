/*
 *
 * FilterLink
 * Allows filtering the visible todos
 *
 */

import { connect } from 'react-redux';
import selectFilterLink from './selectors';
import { setVisibilityFilter } from './actions'

import A from '../../components/A'
const mapStateToProps = selectFilterLink();

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick() {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(A);
