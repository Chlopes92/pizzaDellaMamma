import { Component } from '@angular/core';
import { ProductCategoryType } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent {
  
  constructor(
    private productService:ProductsService){}

  initCategory(category:ProductCategoryType){
    return  this.productService.getCategoryProduct(category);
    
    }
}
