import { normalize, schema } from 'normalizr';
import { getPayloadNameById } from 'utils/helpers';

// Define your entity
const launchPadItem = new schema.Entity('launchPadItems', {}, {
  processStrategy: item => Object.assign({}, {
    id: item.id,
    name: item.full_name,
  })
});

const rocketItem = new schema.Entity('rocketItems', {}, {
  idAttribute: (item) => item.flight_number,
  processStrategy: ({
    links,
    flight_number,
    payloads,
    land_success,
    launch_date_local,
    launch_site: { site_id },
    rocket: { rocket_name }
  }) => {
    let { mission_patch } = links
    let photoUrl = mission_patch || '';
    return Object.assign({}, {
      payload_id: getPayloadNameById(payloads),
      links,
      photoUrl,
      flight_number,
      payloads,
      land_success,
      launch_date_local,
      launchYear: new Date(launch_date_local).getFullYear(),
      site_id,
      rocket_name,
    })
  },
});

const rocketYear = new schema.Entity('rocketYears', {}, {
  idAttribute: (item) => new Date(item.launch_date_local).getFullYear(),
  processStrategy: item => Object.assign({}, {
    id: new Date(item.launch_date_local).getFullYear(),
    name: new Date(item.launch_date_local).getFullYear(),
  })
});

export default data => normalize(data, {
  launchPadItems: new schema.Array(launchPadItem),
  rocketItems: new schema.Array(rocketItem),
  rocketYears: new schema.Array(rocketYear),
});

 