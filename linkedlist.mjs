import Node from "./node.mjs";
export default class LinkedList {
  constructor() {
    this.head = null;
  }

  init(value) {
    const node = new Node();
    node.value = value;
    this.head = node;
  }

  append(value) {
    const node = new Node();
    const tail = this.tail();

    node.value = value;
    tail.next = node;
  }

  prepend(value) {
    const newHead = new Node();
    const oldHead = this.head;

    newHead.value = value;
    newHead.next = oldHead;
    this.head = newHead;
  }

  at(index) {
    let node = this.head;
    let counter = 0;

    while (node !== null) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter += 1;
    }

    return null;
  }

  pop() {
    let node = this.head;

    if (node.next === null) {
      this.head = null;
    }

    while (node !== null) {
      if (node.next.next === null) {
        node.next = null;
        return "Removed";
      }
      node = node.next;
    }

    return "Nothing to remove";
  }

  contains(value) {
    let node = this.head;

    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  find(value) {
    let node = this.head;
    let idx = 0;

    while (node !== null) {
      if (node.value === value) {
        return idx;
      }
      node = node.next;
      idx += 1;
    }

    return null;
  }

  size() {
    let node = this.head;
    let size = 0;

    while (node !== null) {
      size += 1;
      node = node.next;
    }

    return size;
  }

  head() {
    return this.head;
  }

  tail() {
    let node = this.head;

    while (node !== null) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }

    return null;
  }

  toString() {
    let node = this.head;
    let tempArr = [];

    while (node !== null) {
      tempArr.push(`( ${node.value} )`);
      if (node.next === null) {
        tempArr.push("null");
      }
      node = node.next;
    }

    return tempArr.join(" -> ");
  }
}
