import { Component } from '@angular/core';
import { PRODUCTS, IProduct, IProductsByCategory } from 'src/app/mocks/productsfiltre.mock';
import { ProductsService } from 'src/app/services/products/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // Je mets en propriétés mon mocks products.mock.ts
  product!: IProduct;
  // products: IProduct[] = PRODUCTS;
  products: IProductsByCategory[] = PRODUCTS;

  // Je récupère mon service où j'ai implémenté ma méthode pour récupérer la liste des ingrédients inclus 
// constructor(public ingredients: ProductsService,){}

// ngOnInit() {

// }

// addIncludedIngredients() {

// }



 }
