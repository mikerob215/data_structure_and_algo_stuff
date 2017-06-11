export class Queue<T> {
    private items: T[] = [];

    public enqueue(item: T): void {
        this.items.push(item);
    }

    public dequeue() {
        this.items.shift();
    }

    public size(): number {
        return this.items.length;
    }

    public front(): T {
        return this.items[0];
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }

}