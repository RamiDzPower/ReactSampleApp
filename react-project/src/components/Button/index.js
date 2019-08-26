import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, kind }) => {
	return (
		<button type="button" className={`Button-kind__${kind}`}>{title}</button>
	);
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
	kind: PropTypes.oneOf(['primary', 'light']),
};


Button.defaultProps = {
	kind: 'primary',
};

export default Button;
