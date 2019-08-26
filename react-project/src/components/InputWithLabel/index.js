import React from 'react';
import PropTypes from 'prop-types';

const InputWithLabel = ({ name, label, ...rest }) => {
	return (
		<div className="InputWithLabel-input">
			<label className="InputWithLabel-input__label" htmlFor={name}>{label}</label>
			<div className="InputWithLabel-input__input">
				<input id={name} type="text" {...rest} />
			</div>
		</div>
	);
};

InputWithLabel.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
};

InputWithLabel.defaultProps = {
	label: 'Title',
};

export default InputWithLabel;
