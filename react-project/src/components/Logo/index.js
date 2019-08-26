import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ title, kind }) => {
	return (
		<h3 className={`Logo-text__${kind}`}>{title}</h3>
	);
};

Logo.propTypes = {
	title: PropTypes.string.isRequired,
	kind: PropTypes.oneOf(['primary', 'light']),
};


Logo.defaultProps = {
	kind: 'primary',
};

export default Logo;
