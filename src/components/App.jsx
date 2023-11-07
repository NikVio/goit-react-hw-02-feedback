// import { render } from '@testing-library/react';
import { GlobalStyle } from 'GlobalStyle';
import { Component } from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button onClick={onLeaveFeedback} key={option}>
            {option}
          </button>
        );
      })}
    </div>
  );
};
// stats: { good, neutral, bad },
// Total,
// positivePercentage,
// export const Statistics = ({

//   stats: {good}
// }) => {
//   <div>
//     <p>Good: {good}</p>
//     <p>Neutral: {neutral}</p>
//     <p>Bad: {bad}</p>
//     <p>Total: {Total}</p>
//     <p>Positive feedback: {positivePercentage}</p>
//   </div>;
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  updateBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.updateGood}
        />
        {/* <Statistics stats={stats} /> */}
        <GlobalStyle />
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div>
//       <Button />
//       <Statistics stats={stats} />
//
//     </div>
//   );
// };
