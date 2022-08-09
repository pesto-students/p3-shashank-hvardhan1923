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
  rotateLinkedListByKthPostion(k) {
    let currNode = this.head;
    let previousNode = null;
    let positionOfCurrentNode = 1;
    if (this.head == null) throw "Empty List";
    else if (k >= this.size || k == 0) {
      throw "Invalid input";
    }
    while (currNode) {
      previousNode = currNode;
      currNode = currNode.next;
      if (positionOfCurrentNode == k) break;
      positionOfCurrentNode++;
    }
    this.lastNode.next = this.head;
    this.head = currNode;
    previousNode.next = null;
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

  linkedList.rotateLinkedListByKthPostion(5);
  linkedList.getItem();
} catch (e) {
  console.log(e);
}
