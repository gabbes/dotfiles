# 🔗 Linked List 🔗

A simple JavaScript singly linked list class written i TypeScript.

## Usage

```ts
import { LinkedList } from "linked-list";

const list = new LinkedList<string>();

list.append("a");
list.getHead().value; // => "a"
list.getHead().next; // => null

list.prepend("b");
list.getHead().value; // => "b"
list.getHead().next.value; // => "a"

list.append("c");
list.getTail().value; // => "c"
list.size(); // => 3

list.delete(list.getHead().next);
list.getHead().next.value; // => "c"
list.size(); // => 2

list.clear();
list.size(); // => 0
```

## Development

```zsh
npm i
npm run watch
npm test
```

## License

[MIT](./LICENSE)
