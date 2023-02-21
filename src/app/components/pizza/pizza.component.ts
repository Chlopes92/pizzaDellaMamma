import { Component } from '@angular/core';
import { IProduct, ProductCategoryType } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
   products:IProduct[]=[];

  constructor(
    private productService:ProductsService){}
  
    
  
      initCategory(category:ProductCategoryType){
        return  this.productService.getCategoryProduct(category);
        
        }

}
