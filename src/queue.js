const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if(this.head == null) {
      this.head = new ListNode(value);
    } else {
      let newItem = new ListNode(value);
      let iterator = this.head;
      while(iterator.next != null) {
        console.log(iterator.value);
        iterator = iterator.next;
      }
     iterator.next = newItem;
    }
  }

  dequeue() {
    let value = this.head.value;
    if (this.head.next != null) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
    return value;
  }
}

module.exports = {
  Queue
};
