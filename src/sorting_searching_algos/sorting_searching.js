/**
 *
 * @param {number} target number to find in array
 * @param {array} arr array of numbers
 * @returns {number} index of target in array
 */

const binarySearch = (arr, target) => {
	// TODO: implement binary search
	let start = 0
	let end = arr.length - 1

	while(start <= end) {
		let mid = Math.ceil((start + end) / 2)
		if(arr[mid] === target) return mid
		if(arr[mid] > target) end = mid - 1
		if(arr[mid] < target) start = mid + 1
	}

	return -1 
}; 

/**
 *
 * @param {array} arr of numbers
 * @returns {array} sorted array
 */

const merge = (left, right) => {
	let sorted = []

	while(left.length && right.length) {
		if(left[0] <= right[0]) {
			sorted.push(left.shift())
		} else {
			sorted.push(right.shift())
		}
	}

	return [...sorted, ...left, ...right]

}

const mergeSort = (arr) => {
	// TODO: implement merge sort
	if(arr.length <= 1) return arr

	let mid = Math.floor(arr.length / 2)
	let left = arr.slice(0, mid)
	let right = arr.slice(mid, arr.length)

	return merge(mergeSort(left), mergeSort(right))
};


/**
 *
 * @param {array} arr of numbers
 * @returns {array} sorted array
 */

const quickSort = (arr) => {
	// TODO: implement quick sort
	if(arr.length <= 1) return arr

	let [left, right] = [[], []]
	let pivot = arr[arr.length - 1]

	for(let i = 0; i < arr.length - 1; i++) {
		if(arr[i] > pivot) right.push(arr[i])
		if(arr[i] < pivot) left.push(arr[i])
	}

	return [...quickSort(left), pivot, ...quickSort(right)]
};

module.exports = {
	binarySearch,
	mergeSort,
	quickSort,
};
