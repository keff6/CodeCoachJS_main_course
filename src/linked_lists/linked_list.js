function LinkedList(val) {
	this.head = new Node(val);
}

function Node(val) {
	this.node = val;
	this.next = null;
}

LinkedList.prototype.addNode = function (val) {
	let current = this.head;
	while (current.next) {
		current = current.next;
	}
	current.next = new Node(val);
};

LinkedList.prototype.removeNode = function (val) {
	let current = this.head;
	while (current.next) {
		if (current.next.node === val) {
			current.next = current.next.next;
		}
		current = current.next;
	}
};

module.exports = {
	LinkedList,
};
