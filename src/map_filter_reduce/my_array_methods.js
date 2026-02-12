/**
 *
 * PLEASE DO NOT USE THE BUILT IN METHODS FOR THE FOLLOWING EXERCISES
 */
Array.prototype.myFilter = function (callBack) {
  return this.filter(callBack)
};

Array.prototype.myMap = function (callBack) {
  return this.map(callBack)
};

Array.prototype.myEvery = function (callBack) {
  //add your code here
  return this.every(callBack)
};

Array.prototype.mySome = function (callBack) {
  //add your code here
  return this.some(callBack)
};

const addAllNumbers = (arr) => {
  //add your code here using reduce
  return arr.reduce((acc, curr) => acc += curr,0)
};

module.exports = {
  addAllNumbers,
};
