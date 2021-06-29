import { LinkedList } from "./dist/linked-list";

function eq(a: any, b: any) {
  if (a !== b) throw new Error(`expected: "${a}", actual: "${b}"`);
}

describe("linked list", function () {
  it("append initial node", function () {
    const list = new LinkedList<string>();
    list.append("a");
    eq(list.getHead().value, "a");
    eq(list.getHead().next, null);
    eq(list.getTail().value, "a");
    eq(list.getTail().next, null);
    eq(list.size(), 1);
  });
  it("prepend initial node", function () {
    const list = new LinkedList<string>();
    list.prepend("a");
    eq(list.getHead().value, "a");
    eq(list.getHead().next, null);
    eq(list.getTail().value, "a");
    eq(list.getTail().next, null);
    eq(list.size(), 1);
  });
  it("append multiple nodes", function () {
    const list = new LinkedList<string>();
    list.append("a");
    list.append("b");
    list.append("c");
    eq(list.getHead().value, "a");
    eq(list.getHead().next.value, "b");
    eq(list.getHead().next.next.value, "c");
    eq(list.getHead().next.next.next, null);
    eq(list.getTail().value, "c");
    eq(list.getTail().next, null);
    eq(list.size(), 3);
  });
  it("prepend multiple nodes", function () {
    const list = new LinkedList<string>();
    list.prepend("c");
    list.prepend("b");
    list.prepend("a");
    eq(list.getHead().value, "a");
    eq(list.getHead().next.value, "b");
    eq(list.getHead().next.next.value, "c");
    eq(list.getHead().next.next.next, null);
    eq(list.getTail().value, "c");
    eq(list.getTail().next, null);
    eq(list.size(), 3);
  });
  it("append and prepend multiple nodes", function () {
    const list = new LinkedList<string>();
    list.append("b");
    list.prepend("a");
    list.append("c");
    eq(list.getHead().value, "a");
    eq(list.getHead().next.value, "b");
    eq(list.getHead().next.next.value, "c");
    eq(list.getHead().next.next.next, null);
    eq(list.getTail().value, "c");
    eq(list.getTail().next, null);
    eq(list.size(), 3);
  });
  it("delete first node", function () {
    const list = new LinkedList<string>();
    list.append("a");
    const res = list.delete(list.getHead());
    eq(res, true);
    eq(list.size(), 0);
  });
  it("delete middle node", function () {
    const list = new LinkedList<string>();
    list.append("a");
    list.append("b");
    list.append("c");
    const res = list.delete(list.getHead().next);
    eq(res, true);
    eq(list.getHead().value, "a");
    eq(list.getHead().next.value, "c");
    eq(list.getHead().next.next, null);
    eq(list.getTail().value, "c");
    eq(list.getTail().next, null);
    eq(list.size(), 2);
  });
  it("delete non-existent node returns false", function () {
    const list = new LinkedList<string>();
    list.append("a");
    list.append("b");
    list.append("c");
    const res = list.delete({ value: "d", next: null });
    eq(res, false);
    eq(list.size(), 3);
  });
  it("clear nodes", function () {
    const list = new LinkedList<string>();
    list.append("a");
    list.append("b");
    list.append("c");
    list.clear();
    eq(list.getHead(), null);
    eq(list.getTail(), null);
    eq(list.size(), 0);
  });
});
