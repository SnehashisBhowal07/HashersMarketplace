import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  productLists: undefined | product[];
  deleteMessage: undefined | string;
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    this.loadItems();
  }

  deleteProduct(id: number) {
    console.warn('test id', id);
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.deleteMessage = 'Product is deleted';
        this.loadItems();
      }
    });
    setTimeout(() => {
      this.deleteMessage = undefined;
    }, 3000);
  }

  loadItems(): void {
    this.product.itemList().subscribe((result) => {
      console.warn(result);
      this.productLists = result;
    });
  }
}
