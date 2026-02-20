/**
 * The stack data structure is a LIFO (last in first out) data structure.
 */
class Stack {
	constructor() {
		this.items = [];
	}

	push(item) {
		return this.items.push(item);
	}

	pop() {
		// TODO
		return this.items.pop()
	}

	peek() {
		// TODO
		return this.items[this.items.length - 1]
	}

	isEmpty() {
		// TODO
		return this.items.length === 0
	}

	size() {
		// TODO
		return this.items.length
	}

	clear() {
		// TODO
		this.items = []
	}

	print() {
		return this.items;
	}
}

module.exports = { Stack };
