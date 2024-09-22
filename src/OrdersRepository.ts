import { Order } from "./types/Order";
export interface OrdersRespository {
  add(order: Order): void
  getOrder(): Order[]
  updateOrder(order: Order): void
  removeOrder(index: string): void
}