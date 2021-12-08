import React from 'react';
import { Fragment } from 'react';
import styles from './feedback.module.css';

const Statistics = ({
  totalFeedback,
  positiveFeedback,
  arrayFromState,
  actualState,
}) => {
  return (
    <div>
      {totalFeedback !== 0 ? (
        <Fragment>
          <ul>
            {arrayFromState.map(item => (
              <Fragment key={item}>
                <li className={styles.statsItem}>
                  <span className={styles.statsKind}>{item}: </span>
                  <span className={styles.statsValue}>{actualState[item]}</span>
                </li>
              </Fragment>
            ))}
            <ul>
              <li>
                <span>Total: </span>
                <span>{totalFeedback}</span>
              </li>
              <li>
                <span>Positive feedback: </span>
                <span>
                  {positiveFeedback}
                  <span> %</span>
                </span>
              </li>
            </ul>
          </ul>
        </Fragment>
      ) : (
        `There is no feedback`
      )}
    </div>
  );
};
export default Statistics;