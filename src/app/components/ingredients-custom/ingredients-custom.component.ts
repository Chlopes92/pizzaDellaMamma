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
  product!: IProduct;
  products: IProductsByCategory[] = PRODUCTS;
  limitDown: number = 0;
  extraPrice: number = 0;
  totalExtras: number = 0;
  
  // Je récupère mon service où j'ai implémenté ma méthode pour récupérer la liste des ingrédients extras
  constructor(public ingredients: ProductsService) {}

  ngOnInit(i: any) {
    this.totalAmount(i);
    console.log(this.totalExtras)
  }

  increment(i: any) {
    // Je modifie DIRECTEMENT la quantité en index de mon mock
    // JE NE PASSE PAS par une variable ex. quantity = this.products[0].extras[i].quantity => qui sera commune à tous les compteurs et incrémentera donc tous les compteurs
    while (
      this.products[0].products[0].extras[i].quantity <
      this.products[0].products[0].extras[i].maxQuantity
    ) {
      return this.products[0].products[0].extras[i].quantity++;
    }
    return this.products[0].products[0].extras[i].maxQuantity;
  }

  decrement(i: any) {
    // Je modifie DIRECTEMENT la quantité en index de mon mock
    // JE NE PASSE PAS par une variable ex. quantity = this.products[0].extras[i].quantity => qui sera commune à tous les compteurs et incrémentera donc tous les compteurs
    while (this.products[0].products[0].extras[i].quantity > this.limitDown) {
      return (this.products[0].products[0].extras[i].quantity--);
    }
    return (this.products[0].products[0].extras[i].maxQuantity = this.limitDown);
  }

  // addToExtraPrice(i: any) {
  //     this.extraPrice = this.products[0].products[0].extras[i].quantity * this.products[0].products[0].extras[i].additionalPrice;
  //     this.totalExtras = this.totalExtras + this.extraPrice;
  //     console.log(this.products[0].products[0].extras[i].quantity)
  //     console.log(this.products[0].products[0].extras[i].additionalPrice)
  //     console.log(this.extraPrice)
  //     console.log(this.totalExtras)
  // }

  // deductFromExtraPrice(i: any) {
  //   // this.extraPrice = this.products[0].products[0].extras[i].quantity * this.products[0].products[0].extras[i].additionalPrice;
  //   this.totalExtras = this.totalExtras - this.extraPrice;

  //   console.log(this.products[0].products[0].extras[i].quantity)
  //   console.log(this.products[0].products[0].extras[i].additionalPrice)
  //   console.log(this.extraPrice)
  //   console.log(this.totalExtras)
  // }

  totalAmount(i: any){
    this.totalExtras = this.products.reduce((accumulateur, selectedExtras)=>{
      // Je récupère les quantités et les prix cliqués en console
      console.log(selectedExtras.products[0].extras[i].quantity);
      console.log(selectedExtras.products[0].extras[i].additionalPrice);
      // Je retourne l'accumulateur + le produit de Q x P
      return accumulateur += (selectedExtras.products[0].extras[i].quantity * selectedExtras.products[0].extras[i].additionalPrice);
    }, 0);
  }
}
