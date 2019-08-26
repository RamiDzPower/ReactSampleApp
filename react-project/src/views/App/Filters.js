import React from 'react';
import PropTypes from 'prop-types';
import InputWithLabel from 'components/InputWithLabel';
import DropdownWithLabel from 'components/DropdownWithLabel';
import Button from 'components/Button';

const Filters = ({
  keyword,
  launchData,
  maxYear,
  minYear,
  onKeywordChange,
  onMaxYearChange,
  onMinYearChange,
  onSiteChange,
  onSubmit,
  siteId,
  yearsData,
}) => (
  <div className="Layout-filters">
    <div className="row d-flex flex-wrap">
      <div className="column xs-12 md-3">
        <InputWithLabel
          name="Keyword"
          label="Keywords"
          placeholder="eg Falcon"
          value={keyword}
          onChange={onKeywordChange}
        />
      </div>
      <div className="column xs-12 md-3">
        <DropdownWithLabel
          data={launchData}
          name="Keyword"
          label="Launch Pad"
          placeholder="Any"
          onChange={onSiteChange}
          defaultValue={siteId}
        />
      </div>
      <div className="column xs-12 md-2">
        <DropdownWithLabel
          data={yearsData}
          name="Keyword"
          label="Min Year"
          placeholder="Any"
          onChange={onMinYearChange}
          defaultValue={minYear}
        />
      </div>
      <div className="column xs-12 md-2">
        <DropdownWithLabel
          data={yearsData}
          name="Keyword"
          label="Max Year"
          placeholder="Any"
          onChange={onMaxYearChange}
          defaultValue={maxYear}
        />
      </div>
      <div className="column xs-12 md-2 d-flex align-items-end">
        <Button title="Apply" onClick={onSubmit} />
      </div>
    </div>
  </div>
)

Filters.propTypes = {
  keyword: PropTypes.string,
  launchData: PropTypes.array,
  maxYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onKeywordChange: PropTypes.func,
  onMaxYearChange: PropTypes.func,
  onMinYearChange: PropTypes.func,
  onSiteChange: PropTypes.func,
  onSubmit: PropTypes.func,
  siteId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  yearsData: PropTypes.array,
}

Filters.defaultProps = {
  keyword: '',
  launchData: [],
  maxYear: null,
  minYear: null,
  onKeywordChange: null,
  onMaxYearChange: null,
  onMinYearChange: null,
  onSiteChange: null,
  onSubmit: null,
  siteId: null,
  yearsData: [],
}

export default Filters;
