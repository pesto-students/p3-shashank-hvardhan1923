class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
    this.noOfBranches = 0;
  }

  addNode(data) {
    const node = new Node(data);
    if (this.root == null) {
      this.root = node;
      return;
    }
    try {
      this.#appendNodeToBst(this.root, node);
    } catch (e) {
      console.log(e);
    }
  }
  #appendNodeToBst(node, newNode) {
    if (newNode.data > node.data) {
      if (node.right == null) {
        this.noOfBranches++;
        node.right = newNode;
      } else {
        this.#appendNodeToBst(node.right, newNode);
      }
    } else if (newNode.data < node.data) {
      if (node.left == null) {
        this.noOfBranches++;
        node.left = newNode;
      } else {
        this.#appendNodeToBst(node.left, newNode);
      }
    } else {
      throw `The input data ${newNode.data} either present already or invalid data`;
    }
  }
  breadthFirstSearch() {
    let queue = [this.root];
    let finalArr = [];
    while (true) {
      let newArr = [];
      let nodeAtEachLevel = queue.length;
      if (nodeAtEachLevel == 0) {
        return finalArr;
      }
      while (nodeAtEachLevel) {
        let currNode = queue.shift();
        newArr.unshift(currNode.data);
        if (currNode.right) {
          queue.push(currNode.right);
        }
        if (currNode.left) {
          queue.push(currNode.left);
        }
        nodeAtEachLevel--;
      }
      finalArr.push(newArr);
    }
  }
}

const binaryTreeObject = new binarySearchTree();
binaryTreeObject.addNode(1);
binaryTreeObject.addNode(2);
binaryTreeObject.addNode(3);
binaryTreeObject.addNode(8);
binaryTreeObject.addNode(5);
binaryTreeObject.addNode(6);
binaryTreeObject.addNode(4);
binaryTreeObject.addNode(9);
binaryTreeObject.addNode(7);
binaryTreeObject.addNode(10);
binaryTreeObject.addNode(15);
binaryTreeObject.addNode(12);

console.log(binaryTreeObject.breadthFirstSearch());
