/*
 *
 * CounterSaga
 *
 */

import React, { PropTypes, } from 'react';
import { connect } from 'react-redux';
import selectCounterSaga from './selectors';
import styles from './styles.css';

import {
  incrementAsyncAction,
} from './actions'

export class CounterSaga extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div
        className={styles.counterSaga}
      >
        <div
          className={'ui button'}
          onClick={() => this.props.dispatch(incrementAsyncAction())}
        >
          Increment after 1 second
        </div>
        <div className="value">
          {this.props.value}
        </div>
      </div>
    );
  }
}
CounterSaga.propTypes = {
  incrementAsync: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  value: PropTypes.number,
}

const mapStateToProps = selectCounterSaga();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterSaga);
