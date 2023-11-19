import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const Section = ({
  title,
  stats,
  total,
  positivePercentage,
  onLeaveFeedback,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {title === 'Please leave feedback' ? (
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      ) : (
        <Statistics
          stats={stats}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
};
