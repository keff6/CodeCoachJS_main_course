/**
 *
 * @param {number} target number to find in array
 * @param {array} arr array of numbers
 * @returns {number} index of target in array
 */

const binarySearch = (arr, target) => {
	let first = 0;
	let last = arr.length - 1;

	while (first <= last) {
		const middle = Math.floor((first + last) / 2);

		if (arr[middle] < target) {
			first = middle + 1;
		} else if (arr[middle] > target) {
			last = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
};

/**
 *
 * @param {array} arr of numbers
 * @returns {array} sorted array
 */

const mergeSort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	const merge = (left, right) => {
		let resultArray = [];
		let leftIndex = 0;
		let rightIndex = 0;
		while (
			(leftIndex < left?.length || 0) &&
			(rightIndex < right?.length || 0)
		) {
			if (left[leftIndex] < right[rightIndex]) {
				resultArray.push(left[leftIndex]);
				leftIndex++;
			} else {
				resultArray.push(right[rightIndex]);
				rightIndex++;
			}
		}
		return resultArray
			.concat(left.slice(leftIndex))
			.concat(right.slice(rightIndex));
	};

	return merge(mergeSort(left), mergeSort(right));
};

/**
 *
 * @param {array} arr of numbers
 * @returns {array} sorted array
 */

const quickSort = (arr) => {
	const pivot = arr[arr.length - 1];
	const left = [];
	const right = [];

	if (arr.length <= 1) {
		return arr;
	}

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = {
	binarySearch,
	mergeSort,
	quickSort,
};
