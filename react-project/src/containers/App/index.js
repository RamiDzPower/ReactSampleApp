import AppView from 'views/App';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  getItems
} from './actions';
import {
  makeSelectRocketItems,
  makeSelectLaunchpadItems,
  makeSelectRocketYearsItem,
  makeSelectIsFetching,
  makeSelectIsFetched,
} from './selectors';

const mapStateToProps = createStructuredSelector({
  rocketItems: makeSelectRocketItems(),
  launchItems: makeSelectLaunchpadItems(),
  rocketYears: makeSelectRocketYearsItem(),
  isFetchingRocketItems: makeSelectIsFetching(),
  isFetchedRocketItems: makeSelectIsFetched(),
});
 
export function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getItems()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(AppView);
