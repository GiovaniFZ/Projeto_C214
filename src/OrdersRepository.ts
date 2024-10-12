import { Order } from "./types/order";
export interface OrdersRespository {
  add(order: Order): void
  getOrder(): Order[]
  updateOrder(order: Order): void
  removeOrder(index: string): void
}