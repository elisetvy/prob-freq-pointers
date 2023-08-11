/**
 * I: 2 positive integers
 * O: boolean
 *
 * Stringify arguments
 * Create frequency counter
 * Compare frequnecy objects
 *
 *
 * sameFrequency(123, 321);   // true
sameFrequency(34, 14);     // false
sameFrequency(22, 22);     // true
sameFrequency(22, 222);    // false

 */


// add whatever parameters you deem necessary & write docstring
function sameFrequency(num1, num2) {
  const num1Freq = getFrequencyCount(num1.toString());
  const num2Freq = getFrequencyCount(num2.toString());

  for (let key in num1Freq) {
    if (num1Freq[key] !== num2Freq[key]) {
      return false;
    }
  }

  return true;
}

function getFrequencyCount(string) {
  const freqs = {};

  for (let char of string) {
    const curr = freqs[char] || 0;
    freqs[char] = curr + 1;
  }

  return freqs;
}
