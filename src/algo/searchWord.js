import wordList from '../constant/wordList';
let timeout;

function getSearchResult(string) {
  const searchStrRegex = `(?=.*${string.split('').join(')(?=.*')})`;
  const reg = new RegExp(`${searchStrRegex}`, 'g')
  return wordList.others.filter((word) => reg.test(word));
}

export const searchForWord = (search = '', offset = 0, count = 5) => {
  console.debug('Word searched -', search);
  return new Promise((resolve) => {
    timeout = setTimeout(() => {
      const searchResult = wordList[search] || getSearchResult(search) || [];
      const end = offset + count;
      const result = searchResult.slice(offset, end); 
      resolve(result);
    }, 1000);
  });
};
