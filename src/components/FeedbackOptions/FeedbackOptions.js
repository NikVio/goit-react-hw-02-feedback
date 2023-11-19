import { Button, WrapperBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperBtn>
      {options.map(option => {
        return (
          <Button onClick={onLeaveFeedback} key={option}>
            {option}
          </Button>
        );
      })}
    </WrapperBtn>
  );
};
