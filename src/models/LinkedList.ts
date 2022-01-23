import { Node } from './Node';
import { NullNode } from './NullNode';
import { ILinkedList, INode, INullNode } from '../ts/interfaces';

export class LinkedList implements ILinkedList {
    protected _head: INode | INullNode;

    constructor() {
        this._head = new NullNode();
    }

    get head() {
        return this._head;
    }

    public add(data: number): void {
        if (this._head.data === null) {
            // LL is empty
            this._head = new Node(data);
        } else {
            // LL is not empty
            let nodeToAdd = new Node(data);
            nodeToAdd.next = this._head;
            this._head = nodeToAdd;
        }
    }
}
