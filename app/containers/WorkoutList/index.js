/*
 *
 * WorkoutList
 *
 * Lists the workouts that you've done
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectWorkoutList, {
  selectSelectedLift,
  selectNewLift,
  selectLifts,
} from './selectors';

import styles from './styles.css';
import { currentUserWorkoutsRef } from '../../firebase'

import { createStructuredSelector } from 'reselect';

import { Button } from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';

import _ from 'lodash'

import {
  addWorkoutAction,
  addLiftAction,
  changeNewLiftAction,
  selectedLiftAction,
} from './actions'

export class WorkoutList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super()

    this.changeSelectedLift = this.changeSelectedLift.bind(this)
  }
  /**
   * Takes lifts from firebase and transforms them into a format for the Dropdown element.
   */
  getLifts() {
    const lifts = _(Object.keys(this.props.lifts)).map(id => {
      return {
        label: this.props.lifts[id].name,
        value: id,
      }
    }).value()
    return lifts
  }

  getSelectedLiftID() {
    const selectedLift = this.props.selectedLift

    return Object.keys(selectedLift)[0]
  }

  changeSelectedLift(liftID) {
    const lift = _.pick(this.props.lifts, liftID)
    this.props.selectLift(lift)
  }

  render() {
    const relevantState = _.pick(this.props, ['lifts', 'newLift', 'selectedLift'])

    return (
      <div className={styles.workoutList}>
        <Dropdown
          auto
          source={this.getLifts()}
          onChange={this.changeSelectedLift}
          value={this.getSelectedLiftID()}
        />
        <Input
          type="text"
          label="Add Lift"
          onChange={(value) => this.props.changeNewLift({name: value})}
        />
        <Button raised primary label="Hello react-toolbox" />
        <Button
          onClick={() => {
            const newLift = this.props.newLift
            if (newLift.name === '') {
              return
            }
            this.props.addLift(newLift)
          }}
        >
          Add Lift
        </Button>

        <Button
          accent
          label="Bookmark"
        />

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

/* const mapStateToProps = selectWorkoutList()*/

const mapStateToProps = createStructuredSelector({
  newLift: selectNewLift(),
  lifts: selectLifts(),
  selectedLift: selectSelectedLift(),
})


function mapDispatchToProps(dispatch) {
  return {
    selectLift(lift) {
      dispatch(selectedLiftAction(lift))
    },
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
