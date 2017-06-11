export class Stack<T> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public remove(): void {
        this.items.pop();
    }

    public clear() {
        this.items = [];
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    public peek(): T | null {
        return this.items[this.items.length - 1] || null;
    }
}