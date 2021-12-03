import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Notice = styled.p`
  font-size: 1.25em;
  text-align: center;
  color: Chocolate;
`;

const Notification = ({ message }) => {
  return <Notice>{message}</Notice>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
