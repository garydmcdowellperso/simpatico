import config from "../../../../config";

async function FetchVisitorsByDayForMonth(
  id,
  debateId,
  trackingId,
  month,
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

  if (!month) {
    throw new Error("No month");
  }

  // Call matomo for the visitors
  return httpRequester.get(`https://${config.matomo.server}/index.php?date=2020-07-01,2020-07-31&expanded=1&filter_limit=300&format=json&format_metrics=1&idSite=1&method=API.get&module=API&period=day&token_auth=${config.matomo.token}`)
}

export default FetchVisitorsByDayForMonth;
