async function FetchPage(id, 
  { pageRepository }
) {
  if (!id) {
    throw new Error("No id");
  }

  return pageRepository.get(id);
}

export default FetchPage;
