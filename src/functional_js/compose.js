/**
 * Composes a list of functions into a single function
 * @param  {...any} fns javascript functions
 * @returns {function} a function that takes in an argument and passes it through all the functions
 */
const composeFunctions = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );

/**
 * Transforms an item using a list of functions
 * @param {*} fns an array of functions
 * @param {*} item an item to transform
 * @returns {*} the transformed item in its original shape
 */
const transforms = (item) => {
  // TODO: make these function pure (no side effects)
  const removeJob = (obj) => {
    delete obj.job;
    return obj;
  };
  const addName = (obj) => {
    obj.name = obj.name.toLocaleUpperCase();

    return obj;
  };
  const updateAge = (obj) => {
    obj.age = Number(obj.age);
    return obj;
  };

  const fns = [removeJob, addName, updateAge];

  return fns.reduce((acc, fn) => {
    return fn(acc);
  }, item);
};

module.exports = {
  composeFunctions,
  transforms,
};
