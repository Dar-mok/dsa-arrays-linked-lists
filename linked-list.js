/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newVal = new Node(val);
    if (this.head === null) {
      this.head = newVal;
      this.tail = newVal;
    } else if (this.head) {
      this.tail.next = newVal;
      this.tail = newVal;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    //account for if list is empty currently,
    let newVal = new Node(val);

    if (this.head === null) {
      this.head = newVal;
      this.tail = newVal;

    } else if (this.head) {
      newVal.next = this.head;
      this.head = newVal;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {

    if (this.length === 0) {
      throw new Error("List is empty.");
    }

    let lastNode = this.tail;

    if (this.head === this.tail) {
      lastNode = this.tail;
      this.tail = null;
      this.head = null;
    } else {
      let currNode = this.head;
      let currIdx = 0;

      while (currIdx < this.length) {
        if (currNode.next === this.tail) {
          currNode.next = null;
          this.tail = currNode;
        }

        currIdx++;
      }
    }
    this.length--;
    return lastNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let headToRemove;

    if (this.length === 0) {
      throw new Error("List is empty.");
    }

    if (this.head === this.tail) {
      headToRemove = this.tail;
      this.tail = null;
      this.head = null;
    } else {
      headToRemove = this.head;
      this.head = this.head.next;
    }

    this.length--;
    return headToRemove.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length === 0 || idx >= this.length || idx < 0) {
      throw new Error("List is empty.");
    }
    let currInd = 0;
    let currNode = this.head;

    while (currInd !== idx) {
      currNode = currNode.next;
      currInd++;
    }
    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length === 0 || idx >= this.length || idx < 0) {
      throw new Error("Invalid.");
    }

    let currInd = 0;
    let currNode = this.head;

    while (currInd !== idx) {
      currNode = currNode.next;
      currInd++;
    }
    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val AT idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid.");
    }

    let newNode = new Node(val);
    let currInd = 0;
    let currNode = this.head;
    let prevNode = null;

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      while (currInd < idx) {
        prevNode = currNode;
        currNode = currNode.next;
        currInd++;
      }

      newNode.next = currNode;
      prevNode.next = newNode;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid.");
    }

    let currInd = 0;
    let currNode = this.head;
    let nodeToRemove;
    let previousNode = null;

    if (idx === 0) {
      nodeToRemove = this.head;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      while (currInd < idx) {
        previousNode = currNode;
        currNode = currNode.next;
        currInd++;
      }
      nodeToRemove = currNode;
      previousNode.next = currNode.next;
    }
    this.length--;
    return nodeToRemove.val;
  }


  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }

    let sum = 0;
    let currIdx = 0;
    let currNode = this.head;

    while (currIdx < this.length) {
      sum += currNode.val;
      currNode = currNode.next;

      currIdx++;
    }

    return sum / this.length;
  }
}
module.exports = LinkedList;
