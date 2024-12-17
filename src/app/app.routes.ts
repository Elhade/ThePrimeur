import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => 
      import('./features/products/product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'orders',
    loadComponent: () => 
      import('./features/orders/order-list/order-list.component').then(m => m.OrderListComponent)
  },
  {
    path: 'admin',
    loadComponent: () => 
      import('./features/admin/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
  }
];