import React from 'react';
import { TitleSection } from 'styles';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <TitleSection>{title}</TitleSection>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
