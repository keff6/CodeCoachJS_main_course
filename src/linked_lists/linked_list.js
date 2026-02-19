function LinkedList(val) {
    this.head = new Node(val);
}

function Node(val) {
    this.node = val;
    this.next = null;
}

LinkedList.prototype.addNode = function (val) {
    //add your code here
    const newNode =  new Node(val)
    let currentNode = this.head

    while(currentNode.next) {
        currentNode = currentNode.next
    }
    currentNode.next = newNode
};

LinkedList.prototype.removeNode = function (val) {
    //add your code here
    let currentNode = this.head
    let prev = null

    while(currentNode) {
        if(currentNode.node === val) {
            prev.next = currentNode.next
            return
        } else {
            prev = currentNode
            currentNode = currentNode.next
        }
    }
};

module.exports = {
    LinkedList,
};