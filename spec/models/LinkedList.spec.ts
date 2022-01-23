import { LinkedList } from '../../src/models/LinkedList';

describe('Linked List', () => {
    test('Can add nodes', () => {
        const ll = new LinkedList();
        ll.add(5);
        ll.add(9);

        const currentHead = ll.head;
        expect(currentHead.data).toBe(9);

        const nextNode = currentHead.next;
        expect(nextNode.data).toBe(5);

        const noNode = nextNode.next;
        expect(noNode.data).toBe(null);
    });
});
