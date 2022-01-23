import { INullNode } from '../ts/interfaces';

export class NullNode implements INullNode {
    protected _data: null;
    protected _next: null;

    constructor() {
        this._data = null;
        this._next = null;
    }

    get data() {
        return this._data;
    }

    get next() {
        return new NullNode();
    }
}
