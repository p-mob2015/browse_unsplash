import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const LoadIndicator = ({ text }) => (
  <div className="load-indicator">
    <span>{text}</span>
  </div>
);

LoadIndicator.propTypes = {
  text: PropTypes.string,
};
LoadIndicator.defaultProps = {
  text: 'Loading ...',
};

export default LoadIndicator;
