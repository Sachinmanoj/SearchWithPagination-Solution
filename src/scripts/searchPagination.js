import { searchForWord } from "../algo/searchWord";
import { showSearchResults } from "./searchResults";

var searchData = [];
var offset = 0;
var count = 5;
var searchText = '';

export const initSearchData = (value) => {
  var searchData = [];
  var offset = 0;
  var count = 5;
  searchText = value;
};


export const doPaginationSearch = async () => {
  let searchFor = searchText;

  /* 
  * TODO: Add pagination support 
  * "searchData" -> Array of search results, eg: [one, two, three, ...]
  * "offset" -> Integer to identify the starting point to return search values from a result set.
  * "count" -> Integer to define the total number of search values to fetch.
  * "showLoadMore" -> Boolean to show (true) or hide (false) the load more button.
  */

  /*
   * Note - "searchForWord" is the function which provides search results. Arguments below,
   * searchText - String to search
   * offset - Start index
   * count - No.of search values to retreive
   */
 
  // CODE HERE ---
  const newData = await searchForWord(searchText, offset, count);
  const showLoadMore = true;
  searchData = newData;


  showSearchResults(searchData, showLoadMore, searchFor);
};
