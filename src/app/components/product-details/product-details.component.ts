import { Component } from '@angular/core';
import { PRODUCTS, IProduct } from 'src/app/mocks/products.mock';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // Je mets en propriétés mon mocks products.mock.ts
  product!: IProduct;
  products: IProduct[] = PRODUCTS
}
