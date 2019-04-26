import '../styles/index.scss';
import { doPaginationSearch, updateSearchText } from './searchPagination';

window.textSearch = function(searchText = '') {
  // Resets the search text and pagination controls
  updateSearchText(searchText);

  /* 
   * TODO: Optimize the search operation
   * On every text input (onKeyUp), the search functionality is called
   * The search functionality has very high latency
   * Reduce the No.of search invocations, and also maintain the search consistency 
   */
 
  // CODE HERE ---
  const isNewSearch = true;
  return (searchText !== '') ? doPaginationSearch(isNewSearch): null;
}

window.loadMore = function () {
  doPaginationSearch();
}