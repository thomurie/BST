class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let start = this.root;

    if (!start) {
      this.root = new Node(val);
      return this;
    }

    while (start.val) {
      if (val > start.val) {
        if (!start.right) {
          start.right = new Node(val);
          break;
        } else {
          start = start.right;
        }
      } else {
        if (!start.left) {
          start.left = new Node(val);
          break;
        } else {
          start = start.left;
        }
      }
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, start = this.root) {
    if (!start) {
      if (!this.root) {
        this.root = new Node(val);
      }
      start = new Node(val);
      return this;
    }

    if (val > start.val) {
      if (!start.right) {
        start.right = new Node(val);
      } else {
        this.insertRecursively(val, start.right);
      }
    } else {
      if (!start.left) {
        start.left = new Node(val);
      } else {
        this.insertRecursively(val, start.left);
      }
    }

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let start = this.root;

    if (!start) {
      return;
    }

    while (start.val) {
      if (start.val === val) {
        return start;
      }
      if (val > start.val) {
        if (!start.right) {
          break;
        } else {
          start = start.right;
        }
      } else {
        if (!start.left) {
          break;
        } else {
          start = start.left;
        }
      }
    }

    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, start = this.root) {
    if (!start) return;

    if (start.val === val) return start;

    if (val > start.val) {
      if (!start.right) {
        return;
      } else {
        return this.findRecursively(val, start.right);
      }
    } else {
      if (!start.left) {
        return;
      } else {
        return this.findRecursively(val, start.left);
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, arr = []) {
    if (node) {
      arr.push(node.val);
      if (node.left) {
        this.dfsPreOrder(node.left, arr);
      }
      if (node.right) {
        this.dfsPreOrder(node.right, arr);
      }
      return arr;
    }
    return;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, arr = []) {
    if (node) {
      if (node.left) {
        this.dfsInOrder(node.left, arr);
      }
      arr.push(node.val);
      if (node.right) {
        this.dfsInOrder(node.right, arr);
      }
      console.log(arr);
      return arr;
    }
    return;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, arr = []) {
    if (node) {
      if (node.left) {
        this.dfsPostOrder(node.left, arr);
      }
      if (node.right) {
        this.dfsPostOrder(node.right, arr);
      }
      arr.push(node.val);
      console.log(arr);
      return arr;
    }
    return;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
