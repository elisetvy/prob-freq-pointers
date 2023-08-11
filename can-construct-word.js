/**
 * input:  word and letter (2 strings)
 * output: boolean
 *
 * 'aa', 'abc'  >>  false
 * 'abc', 'dcba' >>  true
 *
 * if length of the letters string is less than word string, fail fast
 * loop over each string and create frequency count
 * list out and compare values of each count object
 * the values of the letter object should be greater/equal to word object's values (per char)
 *
*/

function canConstructWord (word, letters) {
  if (letters.length < word.length) {
    return false;
  }
//FIXME: should be const
  let letterObject = makeFreqCount(letters);
  let wordObject = makeFreqCount(word);
//TODO: check different options for ||
  for (let key in wordObject) {
    if (wordObject[key] > letterObject[key] || !letterObject[key]) {
      return false;
    }
  }
  return true;
}

function makeFreqCount (string) {
  let frequency = {};

  for (let char of string){
    const curr = frequency[char] || 0;
    frequency[char] = curr + 1;
  }
  return frequency;
}