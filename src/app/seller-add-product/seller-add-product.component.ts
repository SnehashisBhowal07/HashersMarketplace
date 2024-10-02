import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined;
  constructor(private product: ProductService) {}
  ngOnInit(): void {}
  productAdd(data: product) {
    this.product.additionProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product added successfully';
      }
    });
    console.warn(this.addProductMessage)
    setTimeout(() => {this.addProductMessage = undefined}, 5000);
  }
}
