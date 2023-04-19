function BST(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}

BST.prototype.insert = function (value) {
	if (value <= this.value) {
		if (!this.left) this.left = new BST(value);
		else this.left.insert(value);
	} else if (value > this.value) {
		if (!this.right) this.right = new BST(value);
		else this.right.insert(value);
	}
};

BST.prototype.search = function (value) {
	if (this.value === value) return true;
	else if (value < this.value) {
		if (!this.left) return false;
		else return this.left.search(value);
	} else if (value > this.value) {
		if (!this.right) return false;
		else return this.right.search(value);
	}
};

const inorderVals = [];

BST.prototype.inorder = function () {
	// add your code
	if (this.left) {
		this.left.inorder();
	}
	inorderVals.push(this.value);
	if (this.right) {
		this.right.inorder();
	}

	return inorderVals;
};

const postVals = [];

BST.prototype.postorder = function () {
	// add your code
	if (this.left) {
		this.left.postorder();
	}
	if (this.right) {
		this.right.postorder();
	}
	postVals.push(this.value);

	return postVals;
};

BST.prototype.bfs = function () {
	//add code here
	const q = [this];
	const vals = [];
	while (q.length) {
		const node = q.shift();
		vals.push(node.value);
		if (node.left) q.push(node.left);
		if (node.right) q.push(node.right);
	}
	return vals;
};

module.exports = BST;
