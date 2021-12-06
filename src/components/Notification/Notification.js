import React from 'react';
import { Notice } from 'styles';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <Notice>{message}</Notice>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
