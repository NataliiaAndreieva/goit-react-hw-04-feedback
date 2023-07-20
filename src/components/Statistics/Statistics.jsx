import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statList = [
    { statLine: good, title: 'Good' },
    { statLine: neutral, title: 'Neutral' },
    { statLine: bad, title: 'Bad' },
    { statLine: total, title: 'Total' },
    { statLine: positivePercentage, title: 'Positive feedbacks' },
  ];

  return (
    <ul>
      {statList.map(({ statLine, title }) => (
        <li key={title}>
          <p>
            {title} : <span>{statLine}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.node.isRequired,
};
