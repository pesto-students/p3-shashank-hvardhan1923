class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.lastNode = null;
  }

  addElement(element) {
    let node = new Node(element);
    let currNode = null;
    if (this.head == null) {
      this.head = node;
    } else {
      currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = node;
      this.lastNode = currNode.next;
    }
    this.size++;
  }
  getItem() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.element);
      currNode = currNode.next;
    }
  }
  doesLoopExist() {
    let slowPointer = this.head;
    let fastPointer = this.head;
    let isFound = false;
    while (slowPointer && fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if (slowPointer == fastPointer) {
        isFound = true;
        break;
      }
    }
    return isFound ? "Loop Exist" : "Loop DoeseNot Exist";
  }
}

try {
  const linkedList = new LinkedList();
  linkedList.addElement(1);
  linkedList.addElement(2);
  linkedList.addElement(3);
  linkedList.addElement(4);
  linkedList.addElement(5);
  linkedList.addElement(6);
  linkedList.addElement(7);
  // console.log(linkedList.head);
  linkedList.head.next.next = linkedList.head;
  console.log(linkedList.doesLoopExist());
  //   linkedList.getItem();
} catch (e) {
  console.log(e);
}
