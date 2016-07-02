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

import R from 'ramda'

import {
  addWorkoutAction,
  addLiftAction,
  changeNewLiftAction,
} from './actions'

export class WorkoutList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super()
  }

  render() {
    console.log('this.props.lifts: ', this.props.lifts);
    return (
      <div className={styles.workoutList}>
        <input
          type="text"
          onChange={(evt) => this.props.changeNewLift({name: evt.target.value})}
        />
        <select>
          {
            R.pipe(
              R.toPairs,
              (R.map((pair) => {
                const lift = pair[1]
                return (
                  <option>
                    {lift.name}
                  </option>
                )
              }))
            )(this.props.lifts)
          }
        </select>
        <div
          className={'ui button'}
          onClick={() => {
            const newLift = this.props.newLift
            console.log('newLift: ', newLift);
            if (newLift.name === '') {
              return
            }
            this.props.addLift(newLift)
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
    addLift(newLift) {
      dispatch(addLiftAction(newLift))
    },
    addWorkout() {
      dispatch(addWorkoutAction())
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);
