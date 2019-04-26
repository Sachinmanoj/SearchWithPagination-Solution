import { searchForWord } from "../algo/searchWord";
import { showSearchResults } from "./searchResults";

var searchData = [];
var offset = 0;
var count = 5;
var searchText = '';

export const initSearchData = (value) => {
  searchText = value;
};


export const doPaginationSearch = async () => {
  let searchFor = searchText;
  const newData = await searchForWord(searchText, offset, count);
  searchData = newData;
  showSearchResults(searchData, true, searchFor);
};
