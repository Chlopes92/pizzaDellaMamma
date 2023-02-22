import { Component } from '@angular/core';
import { IProduct, IProductsByCategory, PRODUCTS } from 'src/app/mocks/productsfiltre.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-ingredients-custom',
  templateUrl: './ingredients-custom.component.html',
  styleUrls: ['./ingredients-custom.component.css'],
})
export class IngredientsCustomComponent {
  // Je mets en propriétés mon mocks products.mock.ts
  // product!: IProduct;
  // products: IProduct[] = PRODUCTS;

  product!: IProduct;
  products: IProductsByCategory[] = PRODUCTS
  // Je récupère mon service où j'ai implémenté ma méthode pour récupérer la liste des ingrédients extras
  constructor(public ingredients: ProductsService) {}

  limitDown: number = 0;

  ngOnInit() {}

  increment(i: any) {
    // Je modifie DIRECTEMENT la quantité en index de mon mock
    // JE NE PASSE PAS par une variable ex. quantity = this.products[0].extras[i].quantity => qui sera commune à tous les compteurs et
    // incrémentera donc tous les compteurs
    while (
      this.products[0].products[0].extras[i].quantity <
      this.products[0].products[0].extras[i].maxQuantity
    ) {
      return (this.products[0].products[0].extras[i].quantity += 1);
    }
    return this.products[0].products[0].extras[i].maxQuantity;
  }

  decrement(i: any) {
    // Je modifie DIRECTEMENT la quantité en index de mon mock
    // JE NE PASSE PAS par une variable ex. quantity = this.products[0].extras[i].quantity => qui sera commune à tous les compteurs et
    // incrémentera donc tous les compteurs
    while (this.products[0].products[0].extras[i].quantity > this.limitDown) {
      return (this.products[0].products[0].extras[i].quantity -= 1);
    }
    return (this.products[0].products[0].extras[i].maxQuantity = this.limitDown);
  }
}
