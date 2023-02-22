import { Component, Input } from '@angular/core';
import { IProductsByCategory, ProductCategoryType, PRODUCTS } from 'src/app/mocks/productsfiltre.mock';
// import { IProduct, ProductCategoryType } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent {
  // products:IProduct[]=[];
                                            
  // constructor(
  //   private productService:ProductsService){}
      // initCategory(category:ProductCategoryType){
      //   return  this.productService.getCategoryProduct(category);
        
      //   }

//je recois du parents
 @Input() nameCategories!:IProductsByCategory;
//  je cree une variable que je vais boucler avec  dans le component enfant
 products:IProductsByCategory[]=PRODUCTS;

      
}
