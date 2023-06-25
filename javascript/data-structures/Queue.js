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

  peek() {
    // return the last element
    return this.data[this.data.length - 1];
  }
}

// Queue Weave
function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  // itirate through all elements in queue
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}
