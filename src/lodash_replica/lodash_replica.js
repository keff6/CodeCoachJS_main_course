/**
 * Returns a flattened array
 *
 * @param {array} arr a nested OR not nested array ex: [1, [2,3], [4, [5]]]
 * @returns {array} ex: [1,2,3,4,5]
 */
const myFlatMap = (arr) => {
    // your code here
    let result = []
    let arrayQueue = [arr]

    while(arrayQueue.length) {
        let current = arrayQueue.pop()

        for(let item of current) {
            if(Array.isArray(item)) arrayQueue.unshift(item)
            else result.push(item)
        }
    }

    return result
};

/**
 * Returns an array combining the initial array with the other values
 *
 * @param {array} arr an array
 * @param {array} values destructured series of arrays ex: [1], [2], [3]
 * @returns {array} ex: [1,2,3]
 */
const myConcat = (arr, ...values) => {
    // your code here
    let result = [...arr]

    for(let val of values) {
        result.push(...val)
    }

    return result
};

/**
 * Returns an array with all rejected items removed
 *
 * @param {array} arr an array
 * @param {any} itemToReject value which should be removed from arr
 * @returns {array}
 */
const myReject = (arr, itemToReject) => {
    // your code here
    return arr.filter((val) => val !== itemToReject)
};

module.exports = {
    myFlatMap,
    myConcat,
    myReject,
};
