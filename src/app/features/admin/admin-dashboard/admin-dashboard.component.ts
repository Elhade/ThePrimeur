import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Tableau de Bord Administrateur</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-2">Commandes en attente</h3>
          <p class="text-3xl font-bold text-blue-600">{{ pendingOrders }}</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-2">Commandes du jour</h3>
          <p class="text-3xl font-bold text-green-600">{{ todayOrders }}</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-2">Produits en stock</h3>
          <p class="text-3xl font-bold text-purple-600">{{ totalProducts }}</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-2">Alertes stock</h3>
          <p class="text-3xl font-bold text-red-600">{{ lowStockAlerts }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Dernières Commandes</h2>
          <!-- TODO: Add recent orders table -->
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Produits à Réapprovisionner</h2>
          <!-- TODO: Add low stock products list -->
        </div>
      </div>
    </div>
  `
})
export class AdminDashboardComponent implements OnInit {
  pendingOrders = 0;
  todayOrders = 0;
  totalProducts = 0;
  lowStockAlerts = 0;

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    // TODO: Implement dashboard data loading
  }
}