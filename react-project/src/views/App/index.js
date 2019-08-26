/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Filters from './Filters';
import PageContent from './PageContent';
import shallowEqual from 'utils/shallowEqual';
import { scrollToElement } from 'utils/helpers';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: null,
      siteId: null,
      minYear: null,
      maxYear: null,
      rocketItems: [],
    }

    this.handleOnKeywordChange = this.handleOnKeywordChange.bind(this);
    this.handleOnMinYearChange = this.handleOnMinYearChange.bind(this);
    this.handleOnMaxYearChange = this.handleOnMaxYearChange.bind(this);
    this.handleOnSiteChange = this.handleOnSiteChange.bind(this);
    this.scrollToContent = this.scrollToContent.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  
  componentDidMount() {
    this.props.getItems();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.rocketItems !== null) {
      return {
        rocketItems: nextProps.rocketItems,
      }
    }
 
    return null;
  }

  shouldComponentUpdate(props, state) {
    if (state.keyword !== this.state.keyword) {
      return true;
    }

    if (state.minYear !== this.state.minYear) {
      return true;
    }

    if (state.maxYear !== this.state.maxYear) {
      return true;
    }

    if (state.siteId !== this.state.siteId) {
      return true;
    }

    if (props.isFetchingRocketItems !== this.props.isFetchingRocketItems) {
      return true;
    }

    if (props.isFetchedRocketItems !== this.props.isFetchedRocketItems) {
      return true;
    }

    if (!shallowEqual(props.rocketItems, this.props.rocketItems)) {
      return true;
    }

    if (!shallowEqual(state.rocketItems, this.state.rocketItems)) {
      return true;
    }

    return false;
  }

  getRocketItems() {
    const { rocketItems } = this.props;
    const { 
      keyword,
      maxYear,
      minYear,
      siteId,
    } = this.state;
      
    const min = ({ launchYear }) => launchYear >= Number(minYear);
    const max = ({ launchYear }) => Number(maxYear) >= launchYear;
    const minmax = ({ launchYear }) => (launchYear >= Number(minYear) && Number(maxYear) >= launchYear)
    const site = ({ site_id }) => siteId === site_id
    const name = ({ rocket_name, payload_id, flight_number }) => 
      [rocket_name, payload_id, flight_number]
      .join(', ')
      .toLowerCase()
      .includes(keyword.toLowerCase())

    let filtered = _(rocketItems)
    .filter(minYear && min)
    .filter(maxYear && max)
    .filter(minYear && maxYear && minmax)
    .filter(siteId && site)
    .filter(keyword && name)
    .value();
  
    return filtered;
  }

  handleOnKeywordChange(event) {
    event.preventDefault();
    this.setState({
      keyword: event.target.value || null
    })
  }

  handleOnMinYearChange(event) {
    event.preventDefault();
    this.setState({
      minYear: event.target.value || null
    })
  }

  handleOnMaxYearChange(event) {
    event.preventDefault();
    this.setState({
      maxYear: event.target.value || null
    })
  }

  handleOnSiteChange(event) {
    event.preventDefault();
    this.setState({
      siteId: event.target.value || null
    })
  }

  scrollToContent() {
    scrollToElement(document.querySelector('body'), window.innerHeight / 1.5);
  }

  scrollToTop() {
    scrollToElement(document.querySelector('body'), 0);
  }

	render() {
    console.log('App', this);
    const { 
      isFetchedRocketItems,
      isFetchingRocketItems,
      rocketYears, 
      launchItems
    } = this.props;

		return (
			<React.Fragment>
				<Header
					appName="Space Savvy"
          backgroundImage="/assets/images/space-photo.jpeg"
          scrollTo={this.scrollToContent}
				/>
        <div id="page-content">
          <div className="Layout-container">
            <div className="container">
              <Filters
                yearsData={rocketYears}
                launchData={launchItems}
                keyword={this.state.keyword}
                onKeywordChange={this.handleOnKeywordChange}
                onMinYearChange={this.handleOnMinYearChange}
                onMaxYearChange={this.handleOnMaxYearChange}
                onSiteChange={this.handleOnSiteChange}
              />
              <PageContent
                isLoading={isFetchingRocketItems}
                isFetched={isFetchedRocketItems}
                rocketItems={this.getRocketItems()}
                launchItems={launchItems}
              />
            </div>
          </div>
        </div>
        <Footer
          scrollTo={this.scrollToTop}
        />
			</React.Fragment>
		);
	}
}

App.propTypes = {
  getItems: PropTypes.func,
  launchItems: PropTypes.array,
  rocketItems: PropTypes.array,
  rocketYears: PropTypes.array,
  isFetchingRocketItems: PropTypes.bool,
  isFetchedRocketItems: PropTypes.bool,
}

App.defaultProps = {
  getItems: null,
  launchItems: [],
  rocketItems: [],
  rocketYears: [],
  isFetchingRocketItems: false,
  isFetchedRocketItems: false,
}

export default App;
