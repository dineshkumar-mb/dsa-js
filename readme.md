Okay, let's dive into Data Structures and Algorithms (DSA) in JavaScript, complete with step-by-step explanations and examples.

**Why DSA is Important**

*   **Efficient Code:**  DSA helps you write code that runs faster and uses less memory.
*   **Problem-Solving:**  Understanding DSA strengthens your problem-solving skills, making you a better programmer.
*   **Technical Interviews:**  DSA is a cornerstone of technical interviews at many tech companies.

**Core Concepts to Understand**

1.  **Data Structures:**  Ways to organize and store data effectively (e.g., arrays, linked lists, trees, graphs).
2.  **Algorithms:**  Step-by-step procedures for solving specific problems (e.g., sorting, searching, graph traversal).
3.  **Time and Space Complexity:**  How the performance of an algorithm scales with the size of the input (Big O notation).

**Big O Notation Primer**

*   **O(1):** Constant time (the best).  The algorithm takes the same amount of time regardless of the input size.
*   **O(log n):** Logarithmic time. The time increases proportionally to the logarithm of the input size. Often associated with binary search.
*   **O(n):** Linear time. The time increases linearly with the input size.
*   **O(n log n):**  Log-linear time.  Commonly found in efficient sorting algorithms (merge sort, quicksort).
*   **O(n<sup>2</sup>):** Quadratic time. The time increases proportionally to the square of the input size.  Often seen in nested loops.
*   **O(2<sup>n</sup>):** Exponential time.  The time doubles with each addition to the input size. Avoid these if possible.
*   **O(n!):** Factorial time. The slowest of all.

**1. Arrays**

*   **Definition:**  A collection of elements stored in contiguous memory locations.  JavaScript arrays are dynamic, meaning their size can change.
*   **Operations:**
    *   **Accessing an element:**  `arr[index]` (O(1))
    *   **Adding an element to the end:** `arr.push(element)` (O(1) amortized)
    *   **Removing an element from the end:** `arr.pop()` (O(1))
    *   **Adding an element to the beginning:** `arr.unshift(element)` (O(n))
    *   **Removing an element from the beginning:** `arr.shift()` (O(n))
    *   **Inserting/Deleting at a specific index:** `arr.splice(index, deleteCount, element1, ..., elementN)` (O(n))
    *   **Searching (linear):** Checking each element one by one (O(n))

```javascript
// Array creation
let myArray = [1, 2, 3, 4, 5];

// Accessing elements
console.log(myArray[0]); // Output: 1

// Adding to the end
myArray.push(6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// Removing from the end
myArray.pop();
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Adding to the beginning (expensive!)
myArray.unshift(0);
console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]

// Removing from the beginning (expensive!)
myArray.shift();
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Insert/delete using splice
myArray.splice(2, 1, 10); // Remove 1 element at index 2, insert 10
console.log(myArray); // Output: [1, 2, 10, 4, 5]
```

**2. Linked Lists**

*   **Definition:**  A linear collection of nodes, where each node contains data and a pointer (or link) to the next node.
*   **Types:**
    *   **Singly Linked List:**  Nodes point to the next node only.
    *   **Doubly Linked List:** Nodes point to both the next and previous nodes.
    *   **Circular Linked List:** The last node points back to the first node.
*   **Advantages:**  Dynamic size, efficient insertion/deletion at any position (if you have a reference to the node).
*   **Disadvantages:**  No random access (have to traverse from the beginning), requires more memory due to pointers.
*   **Operations:**
    *   **Insertion at the beginning:** O(1)
    *   **Insertion at the end:** O(n) in singly linked lists (unless you keep a tail pointer).  O(1) if you keep a tail pointer.
    *   **Deletion at the beginning:** O(1)
    *   **Deletion at the end:** O(n) in singly linked lists (requires traversing to the second-to-last node).  O(1) in doubly linked lists with a tail pointer.
    *   **Searching:** O(n)
    *   **Accessing an element by index:** O(n)

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at the beginning
  insertAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert at the end
  insertAtEnd(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Delete at the beginning
  deleteAtBeginning() {
    if (!this.head) {
      return; // Empty list
    }
    this.head = this.head.next;
    this.size--;
  }

  // Print the list (for demonstration)
  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }
}

// Example usage
let myList = new LinkedList();
myList.insertAtEnd(10);
myList.insertAtEnd(20);
myList.insertAtBeginning(5);
myList.printList(); // Output: 5 10 20
myList.deleteAtBeginning();
myList.printList(); // Output: 10 20
```

**Explanation of the LinkedList Code:**

*   **`Node` class:** Represents a single node in the linked list. It stores the `data` and a reference (`next`) to the next node.
*   **`LinkedList` class:**  Represents the linked list itself.
    *   `head`:  Points to the first node in the list.
    *   `size`: Keeps track of the number of nodes in the list.
    *   `insertAtBeginning(data)`: Creates a new node, points its `next` to the current `head`, and updates the `head` to the new node.
    *   `insertAtEnd(data)`: Creates a new node. If the list is empty, the new node becomes the `head`.  Otherwise, it traverses to the end of the list and adds the new node there.
    *   `deleteAtBeginning()`:  Removes the first node by updating the `head` to point to the second node (if it exists).
    *   `printList()`:  Traverses the list and prints the data of each node.

**3. Stacks**

*   **Definition:**  A Last-In, First-Out (LIFO) data structure.  Think of a stack of plates – the last plate you put on is the first one you take off.
*   **Operations:**
    *   **Push:** Adds an element to the top of the stack (O(1)).
    *   **Pop:** Removes and returns the element at the top of the stack (O(1)).
    *   **Peek/Top:** Returns the element at the top of the stack without removing it (O(1)).
    *   **IsEmpty:** Checks if the stack is empty (O(1)).
*   **Implementation:**  Can be implemented using arrays or linked lists.  Arrays are usually more efficient for stacks due to their fast access to the last element.

```javascript
class Stack {
  constructor() {
    this.items = []; // Using an array to store the stack
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow"; // Or throw an error
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}

// Example usage
let myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.printStack(); // Output: 10 20 30
console.log(myStack.peek()); // Output: 30
console.log(myStack.pop()); // Output: 30
myStack.printStack(); // Output: 10 20
```

**4. Queues**

*   **Definition:**  A First-In, First-Out (FIFO) data structure. Think of a queue of people waiting in line – the first person in line is the first one to be served.
*   **Operations:**
    *   **Enqueue:** Adds an element to the rear of the queue (O(1) on average).
    *   **Dequeue:** Removes and returns the element at the front of the queue (O(1) on average).
    *   **Front:** Returns the element at the front of the queue without removing it (O(1)).
    *   **IsEmpty:** Checks if the queue is empty (O(1)).
*   **Implementation:**  Can be implemented using arrays or linked lists.  Linked lists are often preferred for queues to avoid shifting elements when dequeuing (which can be O(n) with arrays).

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow"; // Or throw an error
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}

// Example usage
let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.printQueue(); // Output: 10 20 30
console.log(myQueue.front()); // Output: 10
console.log(myQueue.dequeue()); // Output: 10
myQueue.printQueue(); // Output: 20 30
```

**Important Notes on Queue Implementation:**

*   **Array-based Queues:**  Using `shift()` to dequeue from the front of an array is O(n) because it requires shifting all the remaining elements. To optimize array-based queues, you can use a *circular array* or maintain two pointers (front and rear) to avoid the need for shifting.

*   **Linked List Queues:**  Using a linked list with a head (front) and tail (rear) pointer makes enqueue and dequeue operations O(1).

**5. Hash Tables (Hash Maps)**

*   **Definition:**  A data structure that stores key-value pairs.  It uses a *hash function* to compute an index (or "hash code") into an array of buckets, where the corresponding value is stored.
*   **Advantages:**  Very fast average-case performance for insertion, deletion, and retrieval (O(1) on average).
*   **Disadvantages:**  Worst-case performance can be O(n) if there are many *collisions* (multiple keys hashing to the same index).  Unordered (the order of insertion is not preserved).
*   **Collision Handling:**  Techniques to deal with collisions include:
    *   **Separate Chaining:** Each bucket stores a linked list of key-value pairs that hash to the same index.
    *   **Open Addressing:**  If a bucket is full, you probe for another empty bucket.  Common techniques include linear probing, quadratic probing, and double hashing.

```javascript
class HashTable {
  constructor(size = 17) { // Prime number for better distribution
    this.keyMap = new Array(size);
    this.size = size;
  }

  _hash(key) {  // Simple hash function
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < key.length; i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);  // Separate chaining
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined; // Key not found
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++){
          keysArr.push(this.keyMap[i][j][0])
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++){
          valuesArr.push(this.keyMap[i][j][1])
        }
      }
    }
    return valuesArr;
  }
}

// Example usage
let myHashTable = new HashTable();
myHashTable.set("apple", 10);
myHashTable.set("banana", 20);
myHashTable.set("grape", 30);

console.log(myHashTable.get("banana")); // Output: 20
console.log(myHashTable.get("orange")); // Output: undefined

console.log(myHashTable.keys());
console.log(myHashTable.values());
```

**Explanation of the HashTable Code:**

*   **`_hash(key)`:** A simple hash function.  It iterates over the characters in the key, calculates a value based on the character code and a prime number, and then takes the modulo of the hash table size to get the index. **Important:** A good hash function is crucial for distributing keys evenly and minimizing collisions.
*   **`set(key, value)`:**
    1.  Hashes the key to get the index.
    2.  If the bucket at that index is empty, creates a new array (representing a linked list) at that index.
    3.  Pushes the `[key, value]` pair into the array (separate chaining).
*   **`get(key)`:**
    1.  Hashes the key to get the index.
    2.  If the bucket at that index exists, iterates through the linked list (array) at that index.
    3.  If it finds a key that matches the input key, it returns the corresponding value.
    4.  If the key is not found, it returns `undefined`.
*   **`keys()`** and **`values()`** go through all indexes of the hashmap and return all keys/values

**6. Trees**

*   **Definition:**  A hierarchical data structure consisting of nodes connected by edges.
*   **Terminology:**
    *   **Root:** The top-most node in the tree.
    *   **Child:**  A node directly connected to another node when moving away from the root.
    *   **Parent:** The opposite notion of a child.
    *   **Sibling:** Nodes that share the same parent.
    *   **Leaf:** A node with no children.
    *   **Subtree:**  A tree formed by a node and all its descendants.
    *   **Depth:**  The number of edges from the root to a node.
    *   **Height:**  The number of edges from a node to the deepest leaf.
*   **Types:**
    *   **Binary Tree:** Each node has at most two children (left and right).
    *   **Binary Search Tree (BST):** A binary tree where the value of each node is greater than or equal to the value of all nodes in its left subtree, and less than the value of all nodes in its right subtree.
*   **Tree Traversal:**  Ways to visit all nodes in a tree:
    *   **Breadth-First Search (BFS):** Visit nodes level by level, starting from the root.
    *   **Depth-First Search (DFS):**
        *   **Preorder:** Visit the node, then the left subtree, then the right subtree.
        *   **Inorder:** Visit the left subtree, then the node, then the right subtree (for BSTs, this visits nodes in sorted order).
        *   **Postorder:** Visit the left subtree, then the right subtree, then the node.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // Breadth-First Search
  BFS() {
    let node = this.root,
      data = [],
      queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Depth-First Search - Preorder
  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  // Depth-First Search - Inorder
  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  // Depth-First Search - Postorder
  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }
}

// Example usage
let myBST = new BinarySearchTree();
myBST.insert(10);
myBST.insert(6);
myBST.insert(15);
myBST.insert(3);
myBST.insert(8);
myBST.insert(20);

console.log("BFS:", myBST.BFS());  // Output: [10, 6, 15, 3, 8, 20]
console.log("DFS PreOrder:", myBST.DFSPreOrder()); // Output: [10, 6, 3, 8, 15, 20]
console.log("DFS InOrder:", myBST.DFSInOrder()); // Output: [3, 6, 8, 10, 15, 20]
console.log("DFS PostOrder:", myBST.DFSPostOrder()); // Output: [3, 8, 6, 20, 15, 10]
```

**Explanation of the Binary Search Tree Code:**

*   **`Node` class:** Represents a node in the tree with a `value`, `left` child, and `right` child.
*   **`BinarySearchTree` class:**
    *   `root`: Points to the root node.
    *   `insert(value)`: Inserts a new node into the tree, maintaining the BST property (smaller values to the left, larger values to the right).
    *   `find(value)`: Searches for a node with the given value.
    *   `BFS()`: Implements Breadth-First Search using a queue.
    *   `DFSPreOrder()`, `DFSInOrder()`, `DFSPostOrder()`: Implement Depth-First Search traversals recursively.

**7. Graphs**

*   **Definition:**  A collection of nodes (vertices) connected by edges.
*   **Types:**
    *   **Directed Graph:** Edges have a direction (e.g., A -> B is different from B -> A).
    *   **Undirected Graph:** Edges have no direction (e.g., A and B are connected regardless of direction).
    *   **Weighted Graph:** Edges have a weight (or cost) associated with them.
    *   **Unweighted Graph:** Edges have no weight.
*   **Representations:**
    *   **Adjacency Matrix:** A 2D array where `matrix[i][j]` is 1 if there is an edge from vertex `i` to vertex `j`, and 0 otherwise.
    *   **Adjacency List:**  A list (or dictionary/hash map) where each key is a vertex, and the corresponding value is a list of adjacent vertices.
*   **Graph Traversal:**
    *   **Breadth-First Search (BFS):**  Visit nodes level by level, starting from a source node.
    *   **Depth-First Search (DFS):** Explore as far as possible along each branch before backtracking.

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // For undirected graph
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Depth-First Search (Recursive)
  DFSRecursive(startVertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(startVertex);

    return result;
  }

  // Breadth-First Search
  BFS(startVertex) {
    const queue = [startVertex];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[startVertex] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

// Example usage
let myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "D");

console.log("DFS:", myGraph.DFSRecursive("A")); // Output:  ["A", "B", "D", "C"] (or another valid DFS order)
console.log("BFS:", myGraph.BFS("A"));  // Output: ["A", "B", "C", "D"]
```

**Explanation of the Graph Code:**

*   **`Graph` class:**
    *   `adjacencyList`:  A dictionary/hash map to store the graph's adjacency list representation.  Keys are vertices, and values are arrays of adjacent vertices.
    *   `addVertex(vertex)`: Adds a new vertex to the graph.
    *   `addEdge(vertex1, vertex2)`: Adds an edge between two vertices.
    *   `removeEdge(vertex1, vertex2)`: Removes an edge between two vertices.
    *   `removeVertex(vertex)`: Removes a vertex and all its associated edges.
    *   `DFSRecursive(startVertex)`: Implements Depth-First Search recursively.
    *   `BFS(startVertex)`: Implements Breadth-First Search using a queue.

**Algorithms**

Now, let's look at some common algorithms and how to implement them in JavaScript.

**1. Searching Algorithms**

*   **Linear Search:**
    *   Simply iterate through an array and check each element until you find the target element or reach the end.
    *   Time Complexity: O(n)
*   **Binary Search:**
    *   Only works on *sorted* arrays.
    *   Repeatedly divide the search interval in half. If the middle element is the target, you're done. If the target is less than the middle element, search the left half. If the target is greater, search the right half.
    *   Time Complexity: O(log n)

```javascript
// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if found
    }
  }
  return -1; // Return -1 if not found
}

// Binary Search (iterative)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle; // Found
    } else if (target < arr[middle]) {
      right = middle - 1; // Search left half
    } else {
      left = middle + 1; // Search right half
    }
  }

  return -1; // Not found
}

// Example
let sortedArray = [2, 5, 7, 8, 11, 12];
console.log("Linear Search:", linearSearch(sortedArray, 11)); // Output: 4
console.log("Binary Search:", binarySearch(sortedArray, 11)); // Output: 4
console.log("Linear Search:", linearSearch(sortedArray, 13)); // Output: -1
console.log("Binary Search:", binarySearch(sortedArray, 13)); // Output: -1
```

**2. Sorting Algorithms**

*   **Bubble Sort:**
    *   Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
    *   Time Complexity: O(n<sup>2</sup>) (not efficient for large datasets).
*   **Selection Sort:**
    *   Repeatedly find the minimum element from the unsorted portion of the array and put it at the beginning.
    *   Time Complexity: O(n<sup>2</sup>).
*   **Insertion Sort:**
    *   Builds the final sorted array one item at a time.  It iterates through the input array and inserts each element into its correct position in the sorted portion.
    *   Time Complexity: O(n<sup>2</sup>). Efficient for small or nearly sorted arrays.
*   **Merge Sort:**
    *   A divide-and-conquer algorithm that recursively divides the array into smaller sub-arrays, sorts the sub-arrays, and then merges them back together.
    *   Time Complexity: O(n log n).  Efficient and stable.
*   **Quick Sort:**
    *   Another divide-and-conquer algorithm that picks an element as a "pivot" and partitions the array around the pivot.
    *   Time Complexity: O(n log n) on average, but O(n<sup>2</sup>) in the worst case.  In practice, often faster than Merge Sort due to lower overhead.

```javascript
// Bubble Sort
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      // Swap
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
      i++;
    }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Quick Sort
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // Returns the index of the pivot
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// Example Usage
let unsortedArray = [5, 2, 8, 1, 9, 4, 7, 6, 3];

console.log("Original Array:", unsortedArray);
console.log("Bubble Sort:", bubbleSort([...unsortedArray])); // Using spread operator to avoid modifying the original array
console.log("Selection Sort:", selectionSort([...unsortedArray]));
console.log("Insertion Sort:", insertionSort([...unsortedArray]));
console.log("Merge Sort:", mergeSort([...unsortedArray]));
console.log("Quick Sort:", quickSort([...unsortedArray]));
```

**Explanation of the Sorting Algorithms:**

*   **`bubbleSort(arr)`:**
    *   Compares adjacent elements and swaps them if they are in the wrong order.  The largest element "bubbles" to the end of the array in each pass.  `noSwaps` optimization stops the algorithm early if the array is already sorted.
*   **`selectionSort(arr)`:**
    *   Finds the minimum element in the unsorted portion of the array and swaps it with the first element of the unsorted portion.
*   **`insertionSort(arr)`:**
    *   Builds the sorted array one element at a time. It iterates through the input array, and inserts each element into its correct position in the already sorted portion.
*   **`mergeSort(arr)`:**
    *   A divide-and-conquer algorithm:
        1.  **Divide:**  Recursively divides the array into two halves until you have sub-arrays of length 1 (which are considered sorted).
        2.  **Conquer:** Sorts the sub-arrays (base case: sub-arrays of length 1 are already sorted).
        3.  **Combine:** Merges the sorted sub-arrays back together to produce larger sorted arrays, until you have the final sorted array.
    *   `merge(arr1, arr2)`:  Merges two sorted arrays into a single sorted array.
*   **`quickSort(arr, left, right)`:**
    *   Another divide-and-conquer algorithm:
        1.  **Choose a pivot:** Select an element from the array to be the pivot (in this example, the first element).
        2.  **Partition:**  Rearrange the array so that all elements less than the pivot are to its left, and all elements greater than the pivot are to its right.
        3.  **Recursively sort:** Recursively apply Quick Sort to the sub-arrays to the left and right of the pivot.
    *   `pivot(arr, start, end)`: Partitions the array around the pivot element. It moves all elements smaller than the pivot to the left of the pivot and all elements greater than the pivot to the right of the pivot. Returns the final index of the pivot.
    *   `swap(arr, i, j)`: Swaps the elements at indices `i` and `j` in the array.

**3. Dynamic Programming**

*   **Definition:**  An algorithmic technique that solves problems by breaking them down into overlapping subproblems, solving each subproblem only once, and storing the results in a table (or memo) to avoid recomputation.
*   **Key Concepts:**
    *   **Overlapping Subproblems:** The problem can be broken down into smaller subproblems that are reused multiple times.
    *   **Optimal Substructure:** The optimal solution to the problem can be constructed from the optimal solutions to its subproblems.
*   **Approaches:**
    *   **Top-Down (Memoization):** Start with the original problem and recursively break it down into subproblems. Store the results of subproblems in a memo as they are computed.
    *   **Bottom-Up (Tabulation):** Solve the subproblems in a specific order (usually from smallest to largest), storing the results in a table.  Build up the solution to the original problem from the table.

```javascript
// Example: Fibonacci Sequence (Dynamic Programming)

// Memoization (Top-Down)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// Tabulation (Bottom-Up)
function fibTab(n) {
  if (n <= 2) return 1;
  let fibTable = [0, 1, 1]; // Base cases
  for (let i = 3; i <= n; i++) {
    fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
  }
  return fibTable[n];
}

// Examples
console.log("Fibonacci (Memoization):", fibMemo(10)); // Output: 55
console.log("Fibonacci (Tabulation):", fibTab(10)); // Output: 55

```

**Explanation of the Dynamic Programming Example:**

*   **Fibonacci Sequence:**  The Fibonacci sequence is a classic example for demonstrating dynamic programming because it has overlapping subproblems (e.g., `fib(5)` depends on `fib(4)` and `fib(3)`, and both `fib(4)` and `fib(3)` depend on `fib(2)` and `fib(1)`).

*   **`fibMemo(n, memo)` (Memoization):**
    1.  **Base Cases:** If `n` is in the `memo` object (meaning we've already computed it), return the stored value.  If `n` is 1 or 2, return 1 (the base cases of the Fibonacci sequence).
    2.  **Recursive Call:**  Recursively compute `fib(n-1)` and `fib(n-2)`, storing the result in `memo[n]` before returning it.  This ensures that we only compute each Fibonacci number once.

*   **`fibTab(n)` (Tabulation):**
    1.  **Base Cases:**  If `n` is less than or equal to 2, return 1.
    2.  **Create Table:** Create an array `fibTable` to store the Fibonacci numbers.  Initialize `fibTable[0]`, `fibTable[1]`, and `fibTable[2]` with the base cases.
    3.  **Iterate and Build Table:**  Iterate from `i = 3` to `n`, and compute `fibTable[i]` as the sum of `fibTable[i-1]` and `fibTable[i-2]`.  This builds up the table from the base cases to the final result.
    4.  **Return Result:** Return `fibTable[n]`.

**Key Takeaways for DSA in JavaScript**

*   **Practice Regularly:**  The more you practice implementing DSA, the better you'll understand them.
*   **Understand Big O Notation:**  Knowing the time and space complexity of algorithms is crucial for choosing the most efficient solutions.
*   **Use Appropriate Data Structures:**  Select the data structure that best suits the problem you are trying to solve.
*   **Master Recursion:**  Recursion is essential for many DSA algorithms (especially tree and graph traversals).
*   **Don't Reinvent the Wheel (Sometimes):** JavaScript has built-in methods that can be helpful (e.g., `Array.sort()`, `Map`, `Set`), but understand how they work under the hood.
*   **Focus on Understanding, Not Memorization:**  It's more important to understand the principles behind DSA than to memorize specific code.

This detailed guide with explanations and examples provides a strong foundation for learning Data Structures and Algorithms in JavaScript. Good luck!
