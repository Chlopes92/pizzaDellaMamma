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

  limitDown: number = 1;
  quantity: any = this.products[0].extras[1].quantity;
  maxQuantity: any = this.products[0].extras[1].maxQuantity;
  
  ngOnInit() {
  }
  
  increment(i: any) {
    this.quantity = this.products[0].extras[i].quantity;
    this.maxQuantity = this.products[0].extras[i].maxQuantity;
    // Au clic je récupère les bonnes datas des extras
    console.log(this.quantity)
    console.log(this.maxQuantity)
    // Ma condition
    while(this.quantity < this.maxQuantity) {
      this.quantity += 1;
      return this.quantity;
    }
    return this.quantity = this.quantity;
  }

  decrement(i: any) {
    this.quantity = this.products[0].extras[i].quantity;
    this.maxQuantity = this.products[0].extras[i].maxQuantity;
      // Au clic je récupère les bonnes datas des extras
    console.log(this.quantity)
    console.log(this.maxQuantity)
    // Ma condition
    while(this.quantity > this.limitDown) {
      this.quantity -= 1;
      // console.log(this.quantity)
      return this.quantity;
    }
    return this.quantity = 0;
  }
}
