export interface ILinkedList {
    head: INode | INullNode;
    add(data: number): void;
}

export interface INode {
    data: number;
    next: INode | INullNode;
}

export interface INullNode {
    data: null;
    next: INullNode;
}
