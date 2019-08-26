import React from 'react';
import PropTypes from 'prop-types';
import image from 'images/rocket-avatar.png';

const EmptyState = ({ message }) => {
	return (
    <div className="container">
      <div className="d-flex flex-d-column justify-content-center align-items-center p-30">
        <img src={image} width="200" />
        <p className="text-display__normal p-10">{message}</p>
      </div>
    </div>
	);
};

EmptyState.propTypes = {
  message: PropTypes.string,
}

EmptyState.defaultProps = {
  message: 'Empty Message',
}

export default EmptyState;
