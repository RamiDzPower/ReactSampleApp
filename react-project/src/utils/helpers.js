export const scrollToElement = (element, to, duration = 200) => {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

export const getPayloadNameById = payloads => {
  if (!Array.isArray(payloads)) {
    return null;
  }

  let payloadItem = payloads.reduce((payload) => payload);
  if (!payloadItem && typeof payloadItem !== 'object') {
    return null;
  }

  let { payload_id } = payloadItem;

  return payload_id;
}

export const getRocketMediaLinks = (links, rocketMediaLinksMap) => {
  if (!links && typeof links !== 'object') {
    return [];
  }
  
  let mediaLinks = [];
  
  try {
    mediaLinks = Object.keys(links)
    .map((linkKey) => {
      if (!rocketMediaLinksMap.hasOwnProperty(linkKey)) return;
      return Object.assign({}, {
        name: rocketMediaLinksMap[linkKey],
        link: links[linkKey],
      })
    })
    .filter((item) => item);
  } catch (error) {
    console.error(error);
  }

  return mediaLinks;
}