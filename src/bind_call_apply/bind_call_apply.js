/**
 * Return a greeting
 *
 * @returns {string} `Hey my name is <person name>
 */
const Person = function () {};

function personGreeting() {
  // your code here
}

/**
 * Returns a string
 *
 * @param {string} like1
 * @param {string} like2
 * @returns {string} My name is {name} I am a {job} and I like {like1} and {like2}
 */
function personSmallTalk(like1, like2) {
  // your code here
}

/**
 * Returns a string
 *
 * @param {string[]} hobbies
 * @returns {string} Hey my name is {name} and I like {hobbies}
 */
function listHobbies(...hobbies) {
  // your code here
}

// HINT: leverage the `call` method to make the following functions work as expected

Function.prototype.myBind = function (context, ...args) {
  // your code here
};

Function.prototype.myApply = function (context, args = []) {
  // your code here
};

module.exports = {
  personSmallTalk,
  listHobbies,
  personGreeting,
};
