/**
 * Return a greeting
 *
 * @returns {string} `Hey my name is <person name>
 */
function personGreeting() {
  // your code here
  return `Hey my name is ${this.name}`
}

/**
 * Returns a string
 *
 * @param {string} like1
 * @param {string} like2
 * @returns {string} My name is {name} I am a {job} like {like1} and {like2}
 */
function personSmallTalk(like1, like2) {
  // your code here
  return `My name is ${this.name} and I am a ${this.job} and like ${like1} and ${like2}`
}

/**
 * Returns a string
 *
 * @param {string[]} hobbies
 * @returns {string} Hey my name is {name} and I like {hobbies}
 */
function listHobbies(...hobbies) {
  // your code here
  let lastItem = hobbies[hobbies.length -1]
  let otherItems = hobbies.slice(0, hobbies.length - 1)
  let list = `${otherItems.join(', ')} and ${lastItem}`
  return `Hey my name is ${this.name} and I like ${list}`
}

// HINT: leverage the `call` method to make the following functions work as expected

Function.prototype.myBind = function (context) {
  // your code here
  // first approach: using the that = this technique to presserve the original this inside the context of the closure
  // const that = this;
  // return function(...args) {
  //   return that.call(context, ...args)
  // }

  // second approach: using an arrow function since the this on arrow funtions is inherited from the outer function
  return (...args) => this.call(context, ...args)
};

Function.prototype.myApply = function (context, args = []) {
  // your code here
  return this.call(context, ...args)
};

module.exports = {
  personSmallTalk,
  listHobbies,
  personGreeting,
};
