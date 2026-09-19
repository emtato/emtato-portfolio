export class Stack<T> {
    //map index to item
    private items: Record<number, T> = {};
    private top: number = 0;

    push(element: T): void {
        this.items[this.top] = element;
        this.top++;
    }

    pop(): T {
        this.top--;
        const item = this.items[this.top];
        delete this.items[this.top];
        return item;
    }
    clear(): void {
        this.items = {};
        this.top = 0;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    get size(): number {
        return this.top;
    }

    toString(): string {
        const stackItems: string[] = [];

        for (let index = 0; index < this.top; index++) {
            stackItems.push(String(this.items[index]));
        }

        return stackItems.join(", ");
    }
}
