/*
 *
 * WorkoutList
 *
 * Lists the workouts that you've done
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectWorkoutList from './selectors';
import styles from './styles.css';
import { currentUserWorkoutsRef } from '../../firebase'

import {
  addWorkoutAction,
  addLiftAction,
  changeNewLiftAction,
} from './actions'

export class WorkoutList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super()
    currentUserWorkoutsRef.on('value', (workoutsSnapshot) => {
      console.log('workouts: ', workoutsSnapshot.val());
    })
  }

  render() {
    return (
      <div className={styles.workoutList}>
        <input
          type="text"
          onChange={(evt) => this.props.changeNewLift({name: evt.target.value})}
        />
        <div
          className={'ui button'}
          onClick={() => {
            const currentLift = this.props.currentLift
            if (currentLift.name === '') {
              return
            }
            this.props.addLift(currentLift)
          }}
        >
          Add Lift
        </div>

        <div
          className={'ui button'}
          onClick={() => this.props.addWorkout()}
        >
          Add Workout
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectWorkoutList();

function mapDispatchToProps(dispatch) {
  return {
    changeNewLift(lift) {
      dispatch(changeNewLiftAction(lift))
    },
    addLift(currentLift) {
      dispatch(addLiftAction(currentLift))
    },
    addWorkout() {
      dispatch(addWorkoutAction())
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);
