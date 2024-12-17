import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // TODO: Replace with actual API calls
  getProducts(): Observable<Product[]> {
    return of([]);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(undefined);
  }

  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    return of({ id: 1, ...product });
  }

  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    return of({ id, ...product } as Product);
  }

  deleteProduct(id: number): Observable<void> {
    return of(void 0);
  }
}