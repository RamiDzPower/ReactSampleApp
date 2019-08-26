import React from 'react';
import PropTypes from 'prop-types';
import DropdownSvg from 'images/down-chevron.svg';

const DropdownWithLabel = ({
	name,
  label,
  data,
  defaultValue,
  onChange
}) => (
	<div className="InputWithLabel-input">
		<label className="InputWithLabel-input__label" htmlFor={name}>{label}</label>
		<div className="InputWithLabel-select__wrapper">
			<select
				name={name}
				className="InputWithLabel-select__select"
        defaultValue={defaultValue}
        onChange={onChange}
			>
        <option value="">Any</option>
      {
        data.map(({ id, name }, key) => (
          <option value={id} key={key}>{name}</option>
        ))
      }
			</select>
			<img src={DropdownSvg} className="InputWithLabel-select__icon" alt="svg" />
		</div>
	</div>
);

DropdownWithLabel.propTypes = {
	name: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.array,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
};

DropdownWithLabel.defaultProps = {
	name: null,
  label: null,
  data: [],
  defaultValue: "",
  onChange: null
};

export default DropdownWithLabel;
