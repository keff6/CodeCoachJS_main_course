/**
 *
 * PLEASE DO NOT USE THE BUILT IN METHODS FOR THE FOLLOWING EXERCISES
 */
Array.prototype.myFilter = function (callBack) {
  //add your code here
  const newArr = [];
  for (const item of this) {
    if (callBack(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};

Array.prototype.myMap = function (callBack) {
  //add your code here
  const newArr = [];
  for (const item of this) {
    newArr.push(callBack(item));
  }
  return newArr;
};

Array.prototype.myEvery = function (callBack) {
  //add your code here
  for (const item of this) {
    if (!callBack(item)) {
      return false;
    }
  }
  return true;
};

Array.prototype.mySome = function (callBack) {
  //add your code here
  for (const item of this) {
    if (callBack(item)) {
      return true;
    }
  }
  return false;
};

const addAllNumbers = (arr) => {
  //add your code here using reduce
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

module.exports = {
  addAllNumbers,
};
