/**
 * A queue is a FIFO data structure
 */

class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(item) {
		// your code here
		return this.items.unshift(item)
	}

	dequeue() {
		// your code here
		return this.items.pop()
	}

	front() {
		// your code here
		return this.items[this.items.length - 1]
	}

	isEmpty() {
		// your code here
		return this.items.length === 0
	}

	size() {
		// your code here
		return this.items.length
	}
}

module.exports = { Queue };
