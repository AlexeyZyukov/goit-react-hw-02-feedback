/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Component } from 'react';

// import { CONFIG_DATA } from './CONFIG_DATA';

import styles from './feedback.module.css';

class Feedback extends Component {
  // static defaultProps = {
  //   Good: 0,
  //   Neutral: 0,
  //   Bad: 0,
  // };

  constructor(props) {
    super(props);
    // this.state = {};
    // CONFIG_DATA.forEach(item => {
    //   this.state[item.key] = 0;
    // }); //динамическое формирование state из массива данных CONFIG. Может быть использовано в дальнейшем. Позволяет динамически добавлять данные в state.
    this.state = {
      Good: 0,
      Neutral: 0,
      Bad: 0,
    };
  }

  onBtnClick = event => {
    this.setState({
      [event.target.textContent]: this.state[event.target.textContent] + 1,
    });
    console.log(
      `${event.target.textContent}`,
      this.state[event.target.textContent],
    );
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
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };
  countPositivePercentage = () => {
    const { Good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((Good / total) * 100) : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const arrFrmState = Object.keys(this.state);

    return (
      <Fragment>
        <div>
          {this.props.title && <h2>{this.props.title}</h2>}
          {/* {CONFIG_DATA.map(item => (
            <button key={item.key} onClick={this.onBtnClick}>
              {item.key}
            </button> */}
          {arrFrmState.map(item => (
            <button key={item} onClick={this.onBtnClick}>
              {item}
            </button>
          ))}
        </div>
        {total !== 0 ? (
          <Fragment>
            <ul>
              {/* {CONFIG_DATA.map(item => (
                <Fragment key={item.key}>
                  <li className={styles.statsItem}>
                    <span className={styles.statsKind}>{item.key}: </span>
                    <span className={styles.statsValue}>
                      {this.state[item.key]}
                    </span>
                  </li>
                </Fragment>
              ))} */}
              {arrFrmState.map(item => (
                <Fragment key={item}>
                  <li className={styles.statsItem}>
                    <span className={styles.statsKind}>{item}: </span>
                    <span className={styles.statsValue}>
                      {this.state[item]}
                    </span>
                  </li>
                </Fragment>
              ))}
              <ul>
                <li>
                  <span>Total: </span>
                  <span>{total}</span>
                </li>
                <li>
                  <span>Positive feedback: </span>
                  <span>
                    {this.countPositivePercentage()}
                    <span> %</span>
                  </span>
                </li>
              </ul>
            </ul>
          </Fragment>
        ) : (
          `There is no feedback`
        )}
      </Fragment>
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