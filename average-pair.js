/**
 * I: sorted array of numbers (nums) & numeric targetAvg
 * O: boolean
 *
 * Loop through input array
 * Set pointers at each end of array
 * Compare average of the pointers against the target average
 * If average of pointers is too low, increment from lower end
 * If average is too high, decrement from higher end
 *
 * If input array is empty, fail
 * If left index >= right index, fail
 *
 */



// add whatever parameters you deem necessary & write docstring
function averagePair(nums, targetAvg) {
  if (nums.length === 0) {
    return false;
  }

  let left = 0;
  let right = nums.length - 1;
//FIXME: average should be const
  while (left < right) {
    let average = (nums[left] + nums[right]) / 2;
    if (average === targetAvg) {
      return true;
    } else if (average > targetAvg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));         // true
console.log(averagePair([3, 3, 6, 12, 19], 8));   // false
console.log(averagePair([1, 2, 3], 2));           // true
console.log(averagePair([], 4)); // false
