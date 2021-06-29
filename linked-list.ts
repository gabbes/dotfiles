interface LinkedListNode<T> {
  value: T;
  next: null | LinkedListNode<T>;
}

export class LinkedList<T> {
  #head: null | LinkedListNode<T> = null;

  append(value: T): void {
    const node: LinkedListNode<T> = {
      value,
      next: null,
    };
    const tail = this.getTail();
    if (!tail) {
      this.#head = node;
    } else {
      tail.next = node;
    }
  }

  prepend(value: T): void {
    const node: LinkedListNode<T> = {
      value,
      next: null,
    };
    if (!this.#head) {
      this.#head = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }
  }

  delete(node: LinkedListNode<T>): boolean {
    if (node === this.#head) {
      this.#head = this.#head.next;
      return true;
    }
    let currentNode = this.#head;
    while (currentNode && currentNode.next !== node) {
      currentNode = currentNode.next;
    }
    if (currentNode && currentNode.next === node) {
      currentNode.next = currentNode.next.next;
      return true;
    }
    return false;
  }

  getHead(): null | LinkedListNode<T> {
    return this.#head;
  }

  getTail(): null | LinkedListNode<T> {
    if (!this.#head) return null;
    let node = this.#head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  clear(): void {
    this.#head = null;
  }

  size(): number {
    if (!this.#head) return 0;
    let count = 1;
    let node = this.#head;
    while (node && node.next) {
      count++;
      node = node.next;
    }
    return count;
  }
}
