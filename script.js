import { LinkedList } from "./classes/linkedList.js";

const list = new LinkedList();

console.log(list);

list.append("dog");
list.prepend("cat");
list.append("turtle");
console.log(list.toString());
console.log(list.size());

// console.log(list.at(1).value);

list.insertAt("new node", 3);
console.log(list.toString());
console.log(list.size());
console.log(list.contains("cat"));
// console.log(list);

// The Odin Project - test
// const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// console.log(list.toString());
