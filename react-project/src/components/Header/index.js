/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'components/Logo';
import arrowSvg from 'images/down-chevron-white.png';

const Header = ({
  appName, 
  backgroundImage,
  scrollTo
}) => {
	return (
		<div className="Header-container__cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="Header-container__nav">
          <Logo title={appName} kind="light" />
        </div>
      </div>
      <div className="Header-container__content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="Header-container__welcomeText">
                Discover Space Missions
              </h1>
            </div>
          </div>
        </div>
        <button className="Header-container__arrowButton">
          <img src={arrowSvg} alt="image arrow" onClick={scrollTo} />
        </button>
      </div>
		</div>
	);
};

Header.propTypes = {
	appName: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  scrollTo: PropTypes.func,
};

Header.defaultProps = {
  backgroundImage: null,
  scrollTo: null,
};

export default Header;
