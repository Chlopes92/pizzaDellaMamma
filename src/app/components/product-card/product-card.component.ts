import { Component, Input } from '@angular/core';
import { IProduct, ProductCategoryType } from 'src/app/mocks/productsfiltre.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!:IProduct;
// @Input() category!:ProductCategoryType;



}
