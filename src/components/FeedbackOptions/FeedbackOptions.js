import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  color: Chocolate;
  background: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background: Chocolate;
    outline: 2px solid Chocolate;
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {Object.keys(options).map((option, index) => {
        return (
          <Button
            key={index}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        );
      })}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
