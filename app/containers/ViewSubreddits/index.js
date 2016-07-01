/*
 *
 * ViewSubreddits
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectViewSubreddits from './selectors';
import styles from './styles.css';

export class ViewSubreddits extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.viewSubreddits}>
        <button
          className={'ui button'}
          onClick={() => { this.props.dispatch({type: 'VIEW_SUBREDDIT_REQUEST'}) }}
        >
          View subreddits
        </button>
        <ul>
          {this.props.subredditTitles.map(st => {
            return <li>{st}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = selectViewSubreddits();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSubreddits);
