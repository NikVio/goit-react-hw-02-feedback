import { Notification } from 'components/Notification/Notification';
import { SectionStats } from './Statistics.styled';
export const Statistics = ({
  stats: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  if (total > 0) {
    return (
      <SectionStats>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}</p>
      </SectionStats>
    );
  }
  return <Notification message="There is no feedback" />;
};
