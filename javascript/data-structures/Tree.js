class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      // keep in array copy every everything that is not equal to argument
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // breadth first traversal
  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      // takes out 1st element of array
      const node = arr.shift();

      // take all the nodes children and push into the array
      arr.push(...node.children);
      fn(node);
    }
  }
}
