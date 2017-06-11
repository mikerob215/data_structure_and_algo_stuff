import {Queue} from '../src/data_structures/queue/queue';
import {range} from '../src/functions/range';

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => queue = new Queue<number>());

    describe('enqueue()', () => {
        it('should add an item to back of the queue', () => {
            queue.enqueue(2);
            expect(queue.size()).toBe(1);
        });
    });

    describe('dequeue()', () => {
        it('should remove an item from the front of the queue', () => {
            range(1, 20).forEach(num => queue.enqueue(num));
            queue.dequeue();
            expect(queue.front()).toBe(2);
        });
    });

    describe('front()', () => {
        it('should return the first item in the queue', () => {
            range(1, 20).forEach(num => queue.enqueue(num));
            expect(queue.front()).toBe(1);
        });
    });

    describe('isEmpty()', () => {
        it('should return true if queue has 0 items', () => {
            expect(queue.isEmpty()).toBe(true);
        });

        it('should return false if queue has more than 1 item', () => {
            range(1, 20).forEach(num => queue.enqueue(num));
            expect(queue.isEmpty()).toBe(false);
        });
    });
});