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
