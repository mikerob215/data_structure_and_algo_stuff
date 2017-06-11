import 'jasmine';
import {Stack} from '../src/data_structures/stack/stack';
import {range} from '../src/functions/range';

describe('stack', () => {
    let stack: Stack<number>;
    beforeEach(() => stack = new Stack<number>());

    describe('add()', () => {
        it('should increase length of stack', () => {
            stack.add(1);
            expect(stack.size()).toBe(1);
            stack.add(2423);
            expect(stack.size()).toBe(2);
        });
    });

    describe('remove()', () => {
        it('should remove last item from stack', () => {
            const firstNumber = 1;
            const secondNumber = 2;
            stack.add(firstNumber);
            stack.add(secondNumber);
            stack.remove();
            expect(stack.size()).toBe(1);
        });
    });

    describe('peek()', () => {
        it('should return the last item in the stack', () => {
            stack.add(1);
            expect(stack.peek()).toBe(1);
        });
    });

    describe('isEmpty()', () => {
        it('should return true if stack has 0 items', () => {
            expect(stack.isEmpty()).toBe(true);
        });

        it('should return false if stack has more than 1 item', () => {
            stack.add(1);
            stack.add(4);
            expect(stack.isEmpty()).toBe(false);
        });
    });

    describe('clear()', () => {
        it('should empty out the entire stack', () => {
            range(1, 100).forEach((num: number) => stack.add(num));
            stack.clear();
            expect(stack.isEmpty()).toBe(true);
        });
    });
});

