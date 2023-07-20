
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = { good, neutral, bad };
  
  const onLeaveFeedback = (event) => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good / countTotalFeedback()) * 100);
    return percentage;
  };

  const isEmptyList = !(good + neutral + bad);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onOptions={Object.keys(feedbackOptions)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {isEmptyList ? 
            (<Notification message="There is no Feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
          )}
        </Section>
      </div>
    );
  }

export default App;
