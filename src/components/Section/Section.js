import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: SaddleBrown;
`;

const Section = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
