/**
 * getMaximumSumSubarray - Returns the maximum sum subarray of a given array
 * @param {array} arr ex: [1,2,3,4,5,6,7,8,9,10]
 * @param {number} k
 * @returns {number} the max sum of k consecutive numbers in the array
 */
const getMaxSumOfElementsInSubArray = (arr, k) => {
  // add your code here
  let max = -1
  let i = 0
  let j = k
  let currentMax = 0

  for(let n = 0; n < k; n++) {
    currentMax = currentMax + arr[n]
  }

  max = currentMax

  while(j < arr.length) {
    currentMax = currentMax - arr[i] + arr[j]
    max = Math.max(currentMax, max)
    i++
    j++
  }

  return max
};

module.exports = {
  getMaxSumOfElementsInSubArray,
};
