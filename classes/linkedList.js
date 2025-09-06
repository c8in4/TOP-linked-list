export class LinkedList {
  constructor() {
    this.nextNode = null;
  }

  append(value) {
    // adds a new node containing 'value' to the end of the list
    const newNode = new Node(value);
    let temp = this;
    while (temp.nextNode) {
      temp = temp.nextNode;
    }
    temp.nextNode = newNode;
  }

  prepend(value) {
    // adds a new node containing 'value' to the start of the list
    const newNode = new Node(value);
    newNode.nextNode = this.nextNode;
    this.nextNode = newNode;
  }

  size() {
    // returns the total number of nodes in the list
    let numberOfNodes = 0;
    let temp = this;
    while (temp.nextNode) {
      temp = temp.nextNode;
      numberOfNodes++;
    }
    return numberOfNodes;
  }

  head() {
    // returns the first node in the list
    return this.nextNode;
  }

  tail() {
    // returns the last node in the list
    let temp = this;
    while (temp.nextNode) {
      temp = temp.nextNode;
    }
    return temp;
  }

  at(index) {
    // returns the node at the given 'index'
    let i = 0;
    let temp = this.nextNode;
    while (i < index && temp) {
      temp = temp.nextNode;
      i++;
    }
    return temp;
  }

  pop() {
    // removes the last element from the list
    let previousNode = null;
    let currentNode = this;
    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false.
    let temp = this;
    while (temp.value !== value && temp.nextNode) {
      temp = temp.nextNode;
    }
    return temp.value == value ? true : false;
  }

  find(value) {
    // returns the index of the node containing 'value', or null if not found.
    if (!this.contains(value)) return null;

    let i = 0;
    let temp = this.nextNode;
    while (temp.value !== value && temp.nextNode) {
      temp = temp.nextNode;
      i++;
    }
    return i;
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    // The format should be: (value) -> (value) -> (value) -> null
    let string = "";
    let temp = this;
    while (temp.nextNode) {
      temp = temp.nextNode;
      string += `( ${temp.value} ) -> `;
    }
    string += "null";

    return string;
  }

  // Extra credit
  insertAt(value, index) {
    // inserts a new node with the provided 'value' at the given 'index'.
    if (index < 0 || index > this.size()) return;

    const newNode = new Node(value);
    let previousNode = this;
    let currentNode = this.nextNode;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = newNode;
    newNode.nextNode = currentNode ? currentNode : null;
  }

  removeAt(index) {
    // removes the node at the given 'index'.
    if (index > this.size() || index < 0) return;
    let previousNode = this;
    let currentNode = this.nextNode;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = currentNode.nextNode;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
