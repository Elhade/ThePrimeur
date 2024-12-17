export interface Order {
  id?: number;
  userId: number;
  orderDate: Date;
  status: 'PENDING' | 'PREPARING' | 'DELIVERING' | 'DELIVERED';
  items: OrderItem[];
  totalAmount: number;
  deliveryAddress: string;
  deliveryDate?: Date;
}

export interface OrderItem {
  productId: number;
  quantity: number;
  unitPrice: number;
}