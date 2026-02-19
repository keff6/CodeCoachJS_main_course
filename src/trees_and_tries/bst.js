function BST(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BST.prototype.insert = function (value) {
  let currentNode = this;

  while (true) {
    if (currentNode.value === value) return undefined;

    if (currentNode.value > value) {
      if (currentNode.left) currentNode = currentNode.left;
      else {
        currentNode.left = { value, left: null, right: null };
        return this;
      }
    }

    if (currentNode.value < value) {
      if (currentNode.right) currentNode = currentNode.right;
      else {
        currentNode.right = { value, left: null, right: null };
        return this;
      }
    }
  }
};

BST.prototype.search = function (value) {
  let currentNode = this

  while(currentNode) {
    if(currentNode.value === value) return true
    
    if(currentNode.value > value) currentNode = currentNode.left
    else if(currentNode.value < value) currentNode = currentNode.right
  }

  return false
};

const inorderVals = [];

BST.prototype.inorder = function () {
  // add your code
  let currentNode = this
  
  function traverse(root) {
    if(!root) return
    traverse(root.left)
    inorderVals.push(root.value)
    traverse(root.right)
  }

  traverse(currentNode)

  return inorderVals;
};

const postVals = [];

BST.prototype.postorder = function () {
  // add your code
  let currentNode = this
  
  function traverse(root) {
    if(!root) return
    traverse(root.right)
    postVals.push(root.value)
    traverse(root.left)
  }

  traverse(currentNode)

  return postVals;
};

BST.prototype.bfs = function () {
  //add code here
  const result = []
  const queue = [this]

  while(queue.length) {
    const currentNode = queue.shift() 
    result.push(currentNode.value)

    if(currentNode.left) queue.push(currentNode.left)
    if(currentNode.right) queue.push(currentNode.right)
  }

  return result
};

module.exports = BST;
