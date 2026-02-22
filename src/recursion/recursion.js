/* 
    While you can certainly solve the tests by using an iterative solution
    please work towards the recursive solution ;) 
*/

/**
 * Return a flattened array
 *
 * @param {array} arr [1, [2, [3, [4, 5]]]]
 * @returns {array} ex: [1,2,3,4,5]
 */
const flattenArray = (arr, result = []) => {
	// add your code here
	for(let item of arr) {
		if(!Array.isArray(item)) {
			result.push(item)
		} else {
			flattenArray(item, result)
		}
	}

	return result
};

// console.log(flattenArray([1, [2, [3, [4, 5]]]])); // --> [1,2,3,4,5]

/**
 * Return a boolean based on whether a key is available in an object
 *
 * @param {object} obj
 * @param {string} key
 * @returns {boolean}
 */

const fileExplorer = (obj, key) => {
	// add your code here
	for(let k of Object.keys(obj)) {
		if(k.toString() === key.toString()) return obj[k]

		if(typeof obj[k] === "object" && obj[k] !== null) {
      const result = fileExplorer(obj[k], key)
      if (result !== false) return result
		}
	}

	return false
	// it should return false if the key cannot be found
};

/**
 * Returns an array of arrays with all possible permutations
 *
 * @param {array} nums ex: [1,2,3]
 * @returns {array} ex: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 */
const permutate = (nums = []) => {
	// add your code here
	let n = nums.length
	let [sol, res] = [[], []]

	function recurse() {
		if(sol.length === n) {
			res.push([...sol])
			return
		}

		for(let k of nums) {
			if(!sol.includes(k)) {
				sol.push(k)
				recurse()
				sol.pop()
			}
		}
	}

	recurse()
	return res
	// returns nested array of all possible permuations
};

/**
 * Returns an array of arrays with all possible subsets
 *
 * @param {array} nums ex: [1,2,3]
 * @returns {array} ex: [[], [1], [1,2], [1,3], [2], [2,3], [1,2,3]]
 */
const subsets = (nums = []) => {
	// add your code here
	let solutions = []

	function recurse(currSolutions, remains) {
		solutions.push([...currSolutions])

		for(let i=0; i< remains.length; i++) {
			currSolutions.push(remains[i])
			recurse(currSolutions, remains.slice(i + 1))
			currSolutions.pop()
		}
	}
	
	recurse([], nums)
	console.log(solutions)
	return [solutions].sort((a, b) => a - b)
	// returns nested array of all possible subsets
};

module.exports = {
	flattenArray,
	fileExplorer,
	permutate,
	subsets,
};
