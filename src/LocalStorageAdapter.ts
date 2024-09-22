import { OrdersRespository } from "./OrdersRepository";
import { Order } from "./types/Order";

export class LocalStorageAdapter implements OrdersRespository {
    add(order: Order): void {
        const orders: Order[] = this.getOrder()
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders))
    }
    getOrder(): Order[] {
        const orders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]')
        return orders;
    }
    updateOrder(order: Order): void {
        const orders: Order[] = this.getOrder()
        const index = orders.findIndex((item) => item.id === order.id);
        orders[index] = {
            ...order,
        };
        localStorage.setItem('orders', JSON.stringify(orders))
    }
    removeOrder(id: string): void {
        const orders: Order[] = this.getOrder()
        const index = orders.findIndex((item) => item.id === id);
        orders.splice(index, 1)
        localStorage.setItem('orders', JSON.stringify(orders))
    }
}