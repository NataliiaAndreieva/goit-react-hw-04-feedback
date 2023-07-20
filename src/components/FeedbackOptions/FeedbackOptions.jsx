import PropTypes from 'prop-types';
import { OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onOptions, onLeaveFeedback }) => {
    return (
      <OptionsList>
        {onOptions.map(property => (
          <li key={property}>
            <button name={property} type="button" onClick={onLeaveFeedback}>
              {property}
            </button>
          </li>
        ))}
      </OptionsList>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};