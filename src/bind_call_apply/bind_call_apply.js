/**
 * Return a greeting
 *
 * @returns {string} `Hey my name is <person name>
 */
function personGreeting() {
  return `Hey my name is ${this.name}`;
}

/**
 * Returns a string
 *
 * @param {string} like1
 * @param {string} like2
 * @returns {string} My name is {name} and I am a {job} like {like1} and {like2}
 */
function personSmallTalk(like1, like2) {
  // your code here
  return `My name is ${this.name} and I am a ${this.job} and like ${like1} and ${like2}`;
}

/**
 * Returns a string
 *
 * @param {string[]} hobbies
 * @returns {string} Hey my name is {name} and I like {hobbies}
 */
function listHobbies(...hobbies) {
  // your code here
  const lastHobby = hobbies.pop();
  const hobbiesString = hobbies.join(", ");
  return `Hey my name is ${this.name} and I like ${hobbiesString} and ${lastHobby}`;
}

// HINT: leverage the `call` method to make the following functions work as expected

Function.prototype.myBind = function (context, ...args) {
  // your code here
  return (...moreArgs) => {
    return this.call(context, ...args, ...moreArgs);
  };
};

Function.prototype.myApply = function (context, args = []) {
  // your code here
  return this.call(context, ...args);
};

module.exports = {
  personSmallTalk,
  listHobbies,
  personGreeting,
};
