import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-product',
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class Product {
  products: ProductItem[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999,
      description: 'High performance laptop for work and gaming',
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699,
      description: 'Latest generation smartphone with OLED display',
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199,
      description: 'Wireless noise-canceling over-ear headphones',
      category: 'Accessories',
    },
    {
      id: 4,
      name: 'Mechanical Keyboard',
      price: 89,
      description: 'RGB mechanical keyboard with tactile switches',
      category: 'Accessories',
    },
    {
      id: 5,
      name: 'Smartwatch',
      price: 249,
      description: 'Water-resistant fitness tracker with heart-rate monitor',
      category: 'Wearables',
    },
  ];

  private router = inject(Router);

  viewProductDetails(productId: number) {
    console.log('Navigating to product details for product ID:', productId);
    this.router.navigate(['/pages/product-details', productId]);

  }
}
