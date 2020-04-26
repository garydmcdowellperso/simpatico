async function fetchAllPages( 
  { pageRepository }
) {
  return pageRepository.find();
}

export default fetchAllPages;
