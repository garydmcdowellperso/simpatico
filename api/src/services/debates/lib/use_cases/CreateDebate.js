import Debate from '../entities/Debate';

async function CreateDebate(
  name,
  url,
  debateType,
  languages,
  accountId,
  header,
  overview,
  connection,
  footer,
  trackingId,
  { debateRepository }
) {
  if (!name) {
    throw new Error("No name");
  }
  if (!url) {
    throw new Error("No url");
  }
  if (!debateType) {
    throw new Error("No debateType");
  }
  if (!languages) {
    throw new Error("No languages");
  }
  if (!accountId) {
    throw new Error("No accountId");
  }
  if (!header) {
    throw new Error("No header");
  }
  if (!overview) {
    throw new Error("No overview");
  }
  if (!connection) {
    throw new Error("No connection");
  }
  if (!footer) {
    throw new Error("No footer");
  }
  if (!trackingId) {
    throw new Error("No trackingId");
  }

  const debate = new Debate(null, name, url, debateType, languages, header, overview, {}, connectoin, footer, [], false, accountId, trackingId);

  return debateRepository.persist(debate);
}

export default CreateDebate;
