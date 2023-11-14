// import { render } from '@testing-library/react';
import { GlobalStyle } from 'GlobalStyle';
import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = evt => {
    const targetValue = evt.target.textContent.toLowerCase();
    console.log(targetValue);

    this.setState(prevState => {
      return {
        [targetValue]: prevState[targetValue] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section
          title="Please leave feedback"
          onLeaveFeedback={this.handleFeedback}
        ></Section>
        <Section
          title="Statistics"
          stats={this.state}
          total={total}
          positivePercentage={positivePercentage}
        ></Section>
        <GlobalStyle />
      </div>
    );
  }
}
