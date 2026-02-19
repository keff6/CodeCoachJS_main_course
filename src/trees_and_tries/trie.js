/**
 * Initialize your data structure here.
 */
const Trie = function () {
  this.root = new TrieNode()
};

/**
 * Trie Node.
 */
const TrieNode = function () {
  this.children = {}
  this.endOfWord = false
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  //TODO
  let currentNode = this.root

  for(let c of word) {
    if(!currentNode?.children.hasOwnProperty(c)) {
      currentNode.children[c] = new TrieNode()
    }
    currentNode = currentNode.children[c]
  }

  currentNode.endOfWord = true
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currentNode = this.root

  for(let c of word) {
    if(!currentNode?.children.hasOwnProperty(c)) return false

    currentNode = currentNode.children[c]
  }

  return currentNode.endOfWord
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currentNode = this.root

  for(let c of prefix) {
    if(!currentNode?.children.hasOwnProperty(c)) return false

    currentNode = currentNode.children[c]
  }

  return true
};

module.exports = {
  Trie,
};
