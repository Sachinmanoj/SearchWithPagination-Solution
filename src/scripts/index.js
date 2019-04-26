import '../styles/index.scss';
import { doPaginationSearch, initSearchData } from './searchPagination';

window.textSearch = function(searchText = '') {
  initSearchData(searchText);
  return (searchText !== '') ? doPaginationSearch(): null;
}

window.loadMore = function () {
  doPaginationSearch();
}