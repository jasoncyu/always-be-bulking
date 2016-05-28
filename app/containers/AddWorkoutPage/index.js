/*
 *
 * AddWorkoutPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAddWorkoutPage from './selectors';
import styles from './styles.css';

export class AddWorkoutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.addWorkoutPage }>
      This is AddWorkoutPage container !
      </div>
    );
  }
}

const mapStateToProps = selectAddWorkoutPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutPage);
