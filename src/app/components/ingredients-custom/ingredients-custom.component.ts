import { Component } from '@angular/core';
import { PRODUCTS, IProduct } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-ingredients-custom',
  templateUrl: './ingredients-custom.component.html',
  styleUrls: ['./ingredients-custom.component.css'],
})
export class IngredientsCustomComponent {
  // Je mets en propriétés mon mocks products.mock.ts
  product!: IProduct;
  products: IProduct[] = PRODUCTS;
  // Je récupère mon service où j'ai implémenté ma méthode pour récupérer la liste des ingrédients extras
  constructor(public ingredients: ProductsService) {}
  // Mon compteur
  counter: number = 0;

  ngOnInit() {}

  increment() {
    this.counter += 1;
    return this.counter;
  }

  decrement() {
    this.counter -= 1;
    return this.counter;
  }
}
