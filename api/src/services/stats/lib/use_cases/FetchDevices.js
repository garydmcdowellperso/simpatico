import config from "../../../../config";

async function FetchDevices(
  id,
  debateId,
  trackingId,
  { httpRequester }
) {
  if (!id) {
    throw new Error("No id");
  }

  if (!debateId) {
    throw new Error("No debateId");
  }

  if (!trackingId) {
    throw new Error("No trackingId");
  }

  // Call matomo for the visitors
  return httpRequester.get(`http://${config.matomo.server}/index.php?module=API&method=DevicesDetection.getType&idSite=1&period=week&date=today&format=JSON&token_auth=${config.matomo.token}`)
}

export default FetchDevices;
