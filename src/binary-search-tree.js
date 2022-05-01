const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data) {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = this.addHelper(this.treeRoot, data);
  }

  addHelper(node, data) {
    if(node === null) {
      return new Node(data);
    }

    if(node.data === data) {
      return node;
    }

    if(data > node.data) {
      node.right = this.addHelper(node.right, data);
    } else {
      node.left = this.addHelper(node.left, data);
    }

    return node;
  }

  has(data) {
    return this.hasHelper(this.treeRoot, data);
  }

  hasHelper(node, data) {
    if(node === null) {
      return false;
    }

    if(node.data === data) {
      return true;
    }

    if(data > node.data) {
      return this.hasHelper(node.right, data);
    } else {
      return this.hasHelper(node.left, data);
    }
  }


  find(data) {
    return this.findHelper(this.treeRoot, data);
  }

  findHelper(node, data) {
    if(node === null) {
      return null;
    }

    if(node.data === data) {
      return node;
    }

    if(data > node.data) {
      return this.findHelper(node.right, data);
    } else {
      return this.findHelper(node.left, data);
    }
  }

  remove(data) {
    this.treeRoot = this.removeHelper(this.treeRoot, data);
  }

  removeHelper(node, data) {
    if(node === null) {
      return null;
    }

    
    if(data > node.data) {
      node.right = this.removeHelper(node.right, data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeHelper(node.left, data);
      return node;
    } else {
      if(node.left === null && node.right === null) {
        return null;
      }
      if(node.left === null) {
        node = node.right;
        return node;
      }
      if(node.right === null) {
        node = node.left;
        return node;
      }
    }

    let maxFromLeft = node.left;
    while(maxFromLeft.right != null) {
      maxFromLeft = maxFromLeft.right;
    }
    node.data = maxFromLeft.data;

    node.left = this.removeHelper(node.left, data);

    return node;
  }

  min() {
    if(this.root === null) {
      return null;
    }
    return this.minHelper(this.treeRoot);
  }

  minHelper(node) {
    if(node.left === null) {
      return node.data;
    }
    return this.minHelper(node.left);
  }


  max() {
    if(this.root === null) {
      return null;
    }
    return this.maxHelper(this.treeRoot);
  }

  maxHelper(node) {
    if(node.right === null) {
      return node.data;
    }
    return this.maxHelper(node.right);
  }

}

module.exports = {
  BinarySearchTree
};