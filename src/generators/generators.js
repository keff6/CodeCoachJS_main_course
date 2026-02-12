/**
 * Return an iterator counting down from the initial number
 *
 * @param {number} initial initial num to start loop
 * @returns {iterator} ex: {value: 1, done: false}
 */
function* forLoopGenerator(initial) {
    let val = initial
    while(val) {
        yield val
        val--
    }
}

/**
 * Return an iterator generating a unique id
 *
 * @returns {iterator} ex: {value: 1231234, done: false}
 */
function* generateRandomId() {
    let id = 1
    while(true) {
        yield id
        id++
    }
}

module.exports = {
    forLoopGenerator,
    generateRandomId,
};
