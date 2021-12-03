import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Report = styled.div`
  font-size: 1.25em;
  padding-left: 15px;
  color: Chocolate;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Report>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </Report>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
