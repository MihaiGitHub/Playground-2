// all can do is add records in and pull records out
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    // add record to start of array
    this.data.unshift(record);
  }

  remove() {
    // remove and return last element of array
    return this.data.pop();
  }
}
