/**
 * countFrequency - counts the frequency of each value in an array
 * @param {array} arr [1, 1, 2, 3]
 * @returns {object} an object with the key being the value and the value being the frequency {1: 2, 2: 1, 3: 1}
 */
const countFrequency = (arr) => {
  // add your code here
  const frequency = {}

  for(let n of arr) {
    if(frequency.hasOwnProperty(n)) frequency[n]++
    else frequency[n] = 1
  }

  return frequency
  // returns an object with the frequency of each value in the array
};

/**
 * getDuplicates returns all the duplicate values in an array
 * @param {array} arr [1,2,1,2,3,4,5,6,7,8,9,9]
 * @returns {array} an array of all the duplicate values in the array [1,2,9]
 */

const getDuplicates = (arr) => {
  // add your code here
  const current = {}
  const res = []

  for(let n of arr) {
    if(current.hasOwnProperty(n)) res.push(n)
    else current[n] = true
  }

  return res
  // returns an array of all the duplicate values in the array
};

module.exports = {
  countFrequency,
  getDuplicates,
};
