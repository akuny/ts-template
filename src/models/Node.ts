import { NullNode } from './NullNode';
import { INode, INullNode } from '../ts/interfaces';

export class Node implements INode {
    protected _data: number;
    protected _next: INode | INullNode;

    constructor(d: number) {
        this._data = d;
        this._next = new NullNode();
    }

    get data() {
        return this._data;
    }

    get next() {
        return this._next;
    }

    set next(node: INode | INullNode) {
        this._next = node;
    }
}
