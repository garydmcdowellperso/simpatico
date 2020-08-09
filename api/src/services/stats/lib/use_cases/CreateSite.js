import config from "../../../../config";

async function CreateSite(
  name,
  { httpRequester }
) {
  if (!name) {
    throw new Error("No name");
  }

  // Call matomo for the visitors
  return httpRequester.get(`https://${config.matomo.server}/index.php?module=API&method=SitesManager.add&siteName=${name}&format=JSON&token_auth=${config.matomo.token}`)
}

export default CreateSite;
