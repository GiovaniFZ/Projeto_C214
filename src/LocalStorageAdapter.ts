import { OrdersRespository } from "./OrdersRepository";
import { Order } from "./types/order";

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
        const orders = this.getOrder();
        const filteredOrders = orders.filter(order => order.id !== id); // Filtra apenas os pedidos com ID diferente
        localStorage.setItem('orders', JSON.stringify(filteredOrders)); // Atualiza o localStorage
    }
}
