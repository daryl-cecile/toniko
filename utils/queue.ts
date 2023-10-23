

export class Queue<D, R extends (result:D)=>void = (result:D)=>void>{
    private _queue:Map<string, Array<R>> = new Map();

    has(key:string) {
        return this._queue.has(key);
    }

    set(key:string, value?:R) {
        if (!this._queue.has(key)) {
            this._queue.set(key, []);
        }
        if (value) {
            this._queue.get(key)?.push(value);
        }
    }

    get(key:string) {
        return new Promise<D>(resolve => {
            this.set(key, ((data:D) => {
                resolve(data)
            }) as R);
        });
    }

    process(key:string, data:D) {
        const queue = this._queue.get(key);
        if (queue) {
            queue.forEach((fn) => fn(data));
            this._queue.delete(key);
        }
    }
}