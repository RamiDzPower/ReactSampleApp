import React from 'react';
import PropTypes from 'prop-types';
import RocketItem from 'components/RocketItem';
import { getRocketMediaLinks } from 'utils/helpers';
import { formatDate, formatAMPM } from 'utils/formatDateTime';
import EmptyState from 'components/EmptyState';
import Loading from 'components/Loading';

import { ROCKET_LINKS } from '../../constants';

const PageContent = ({
  rocketItems,
  launchItems,
  isLoading,
  isFetched,
}) => (
  <div className="Layout-results">
    <div className="row d-flex flex-wrap justify-content-center">
      <span className="p-20 text-sub__normal">
      {`Showing ${rocketItems.length} Missions`}
      </span>
    </div>
    {
      isLoading && (
        <Loading />
      )
    }
    <div className="row d-flex flex-wrap">
    {
      !isLoading && 
      isFetched && 
      rocketItems.length === 0 && (
        <EmptyState message="No Data Found!" />
      )
    }
    {
      !isLoading &&
      rocketItems.map(({
        photoUrl,
        flight_number,
        payloads,
        land_success,
        launch_date_local,
        site_id,
        links,
        rocket_name,
        payload_id,
      }, key) => {
        const getMediaLinks = getRocketMediaLinks(links, ROCKET_LINKS);
        const isLandSuccess = land_success;
        const date = formatDate(launch_date_local);
        const time = formatAMPM(launch_date_local);
        const launchName = launchItems
        .filter((i) => i.id === site_id)
        .map(x => x.name)
        .reduce(d => d);

        return (
          <div className="column xs-12" key={key}>
            <div className="Layout-rocket__item">
              <RocketItem
                date={date}
                photoUrl={photoUrl}
                launchName={launchName}
                links={getMediaLinks}
                name={rocket_name}
                number={flight_number}
                payload={payload_id}
                success={isLandSuccess}
                time={time}
              />
            </div>
          </div>
        )
      })
    }
    </div>
  </div>
);

PageContent.propTypes = {
  rocketItems: PropTypes.array,
  launchItems: PropTypes.array,
  isLoading: PropTypes.bool,
  isFetched: PropTypes.bool,
}

PageContent.defaultProps = {
  rocketItems: [],
  launchItems: [],
  isLoading: false,
  isFetched: false,
}

export default PageContent;
