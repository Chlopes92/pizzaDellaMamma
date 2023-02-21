import { Component } from '@angular/core';
import { IProduct, ProductCategoryType } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  products:IProduct[]=[];
constructor(
  private productService:ProductsService){}

  ngOnInit(){
    // this.products=this.productService.getProducts();
    // this. initCategory();
    }

    initCategory(category:ProductCategoryType){
      return this.productService.getCategoryProduct(category);
    }
}

