import { Node } from '../../src/models/Node';

describe('Node', () => {
    test('Can create', () => {
        const node = new Node(6);

        expect(node.data).toBe(6);

        const noNode = node.next;
        expect(noNode.data).toBe(null);
    });
});
