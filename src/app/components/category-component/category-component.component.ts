import { Component } from '@angular/core';
import { IProduct, ProductCategoryType } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent {
  products:IProduct[]=[];
                                            
  constructor(
    private productService:ProductsService){}
  
    
  
      initCategory(category:ProductCategoryType){
        return  this.productService.getCategoryProduct(category);
        
        }

}