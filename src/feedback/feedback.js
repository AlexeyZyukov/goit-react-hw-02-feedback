import PropTypes from 'prop-types';
import { Component } from 'react';

import styles from './feedback.module.css';

const CONFIG_DATA = [
  {
    key: 'Good',
  },
  {
    key: 'Neutral',
  },
  {
    key: 'Bad',
  },
];

class Feedback extends Component {
  // static defaultProps = {
  //   Good: 0,
  //   Neutral: 0,
  //   Bad: 0,
  // };

  constructor(props) {
    super(props);
    this.state = {};
    CONFIG_DATA.forEach(item => {
      this.state[item.key] = 0;
    });
    // this.state = {
    //   Good: 0,
    //   Neutral: 0,
    //   Bad: 0,
    // };
  }

  totalCount = 0;

  onBtnClick = event => {
    // console.dir(event.target);
    console.log(event.target.textContent);
    console.log(Object.keys(this.state)[0]);
    this.setState({
      [event.target.textContent]: this.state[event.target.textContent] + 1,
    });
    // console.log('event.currentTarget: ', event.currentTarget);
    // console.log('event.currentTarget.textContent: ', tagretName);
  };
  // onGoodBtnClick = () => { //prevState - учитывает предыдущее значение аргумента. Учитывает асинхронность метода setState
  //   this.setState(prevState => {
  //     return ({ value: prevState.value + 1 });
  //   })
  //   console.log('value: ', this.state.value)
  // }

  countTotalFeedback = () => {
    this.totalCount = this.state.Good + this.state.Neutral + this.state.Bad;
    // console.log(this.state.Good);
    // console.log(this.state.Neutral);
    // console.log(this.state.Bad);
    // console.log(this.totalCount);
    return this.totalCount;
  };
  countPositivePercentage = () => {
    const positivePercentage =
      Math.round(this.state.Good / this.totalCount) * 100;
    // console.log(positivePercentage);
    return positivePercentage;
  };

  render() {
    return (
      <>
        <div>
          <h2>{this.props.title}</h2>
          {/* <button onClick={this.onBtnClick}>Good</button> */}
          <button onClick={this.onBtnClick}>
            {Object.keys(this.state)[0]}
          </button>
          <button onClick={this.onBtnClick}>Neutral</button>
          <button onClick={this.onBtnClick}>Bad</button>
        </div>
        <div>
          <ul className={styles.statsList}>
            <li className={styles.statsItem}>
              <span className={styles.statskind}>Good: </span>
              <span className={styles.statsvalue}>{this.state.Good}</span>
            </li>
          </ul>
          <ul className={styles.statsList}>
            <li className={styles.statsItem}>
              <span className={styles.statskind}>Neutral: </span>
              <span className={styles.statsvalue}>{this.state.Neutral}</span>
            </li>
          </ul>
          <ul className={styles.statsList}>
            <li className={styles.statsItem}>
              <span className={styles.statskind}>Bad: </span>
              <span className={styles.statsvalue}>{this.state.Bad}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Total: </span>
              <span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              <span>Positive: </span>
              <span>
                {this.countPositivePercentage()}
                <span> %</span>
              </span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

console.dir(Feedback);

// function Statistics(props) {
//   const { id, kind, value } = props;
//   return (
//     <ul className={styles.statList} key={id}>
//       <li className={styles.statItem}>
//         <span className={styles.statKind}>{kind}</span>
//         <span className={styles.statValue}>{value}</span>
//       </li>
//     </ul>
//   );
// }

export default Feedback;
