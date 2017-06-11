import {Stack} from "./stack";
import {range} from "../functions/range";

const stack = new Stack();

const isEmpty = () => console.log(`Emtpy: ${stack.isEmpty()}`);
const peek = () => console.log(`Last element: ${stack.peek()}`);

const numbersArray = range(1, 5435);
isEmpty();
numbersArray.forEach(num => stack.add(num));
peek();
