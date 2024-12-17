import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // TODO: Replace with actual API calls
  getOrders(): Observable<Order[]> {
    return of([]);
  }

  getOrder(id: number): Observable<Order | undefined> {
    return of(undefined);
  }

  createOrder(order: Omit<Order, 'id'>): Observable<Order> {
    return of({ id: 1, ...order });
  }

  updateOrderStatus(id: number, status: Order['status']): Observable<Order> {
    return of({ id, status } as Order);
  }
}