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
    this.first = 0;
    this.last = 0;
    this.size = 0;
    this.list = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.first) {
      this.first = newNode;
    }

    if (this.list) {
      let list = this.list;

      while (list.next) {
        list = list.next;
      }
      list.next = newNode;
    } else {
      this.last = newNode;
      this.list = newNode;
    }
    return this.size++;
  }

  dequeue() {
    this.list = this.list.next;
    if (this.size === 0) return null;
    if (this.size === 1) this.last = null;
    const cptrFirst = this.first;
    this.first = this.first.next;
    this.size--;
    cptrFirst.next = null;

    return cptrFirst.value;
  }
}

module.exports = {
  Queue
};
