import { describe, it, expect, beforeEach } from 'vitest'; // Importações do Vitest
import { LocalStorageAdapter } from '../LocalStorageAdapter';
import { Order } from '../types/order';

// Mock do localStorage
const localStorageMock = (() => {
    let store: { [key: string]: string } = {};
    return {
        getItem(key: string) {
            return store[key] || null;
        },
        setItem(key: string, value: string) {
            store[key] = value.toString();
        },
        clear() {
            store = {};
        },
        removeItem(key: string) {
            delete store[key];
        },
    };
})();

describe('LocalStorageAdapter', () => {
    const adapter = new LocalStorageAdapter();

    beforeEach(() => {
        // Limpa o localStorage antes de cada teste
        localStorageMock.clear(); // Limpa o mock
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
            writable: true, // Permite que o mock seja sobrescrito
        });
    });

    it('should add an order', () => {
        const order: Order = { id: '1', table: 'Table 1', target: 'Target 1', item: 'item1', quantity: 2 };
        adapter.add(order);
        const orders = adapter.getOrder();
        expect(orders).toHaveLength(1);
        expect(orders[0]).toEqual(order);
    });

    it('should get orders', () => {
        const order1: Order = { id: '1', table: 'Table 1', target: 'Target 1', item: 'item1', quantity: 2 };
        const order2: Order = { id: '2', table: 'Table 2', target: 'Target 2', item: 'item2', quantity: 3 };
        
        adapter.add(order1);
        adapter.add(order2);

        const orders = adapter.getOrder();
        expect(orders).toHaveLength(2);
        expect(orders).toEqual([order1, order2]);
    });

    it('should update an order', () => {
        const order: Order = { id: '1', table: 'Table 1', target: 'Target 1', item: 'item1', quantity: 2 };
        adapter.add(order);

        const updatedOrder: Order = { id: '1', table: 'Table 1', target: 'Target 1', item: 'item1', quantity: 5 };
        adapter.updateOrder(updatedOrder);
        
        const orders = adapter.getOrder();
        expect(orders[0]).toEqual(updatedOrder);
    });

    it('should remove an order', () => {
        const order1: Order = { id: '1', table: 'Table 1', target: 'Target 1', item: 'item1', quantity: 2 };
        const order2: Order = { id: '2', table: 'Table 2', target: 'Target 2', item: 'item2', quantity: 3 };
        
        adapter.add(order1);
        adapter.add(order2);
        adapter.removeOrder('1');

        const orders = adapter.getOrder();
        expect(orders).toHaveLength(1);
        expect(orders[0]).toEqual(order2);
    });

    it('should not remove an order that does not exist', () => {
        const order: Order = { id: '1', table: 'Table 1', target: 'Target 1', item: 'item1', quantity: 2 };
        adapter.add(order);
        adapter.removeOrder('2'); // Tentando remover um ID que não existe

        const orders = adapter.getOrder();
        expect(orders).toHaveLength(1);
        expect(orders[0]).toEqual(order);
    });
});
