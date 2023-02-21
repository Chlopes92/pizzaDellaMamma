import { Component } from '@angular/core';
import { PRODUCTS, IProduct } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // Je mets en propriétés mon mocks products.mock.ts
  product!: IProduct;
  products: IProduct[] = PRODUCTS
  // Je récupère mon service où j'ai implémenté ma méthode pour récupérer la liste des ingrédients inclus 
constructor(public ingredients: ProductsService,){}

ngOnInit() {
this.addIncludedIngredients();
}

addIncludedIngredients() {
  console.log(this.ingredients)
  return this.ingredients;
}



}
