import { Component, ElementRef, ViewChildren } from '@angular/core';
import {
  IProduct,
  IProductsByCategory,
  PRODUCTS,
} from 'src/app/mocks/productsfiltre.mock';
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

  // Je stocke mes boutons
  @ViewChildren('buttonInc') buttonInc: ElementRef | undefined;
  @ViewChildren('buttonDec') buttonDec: ElementRef | undefined;

  // Je récupère mon service où j'ai implémenté ma méthode pour récupérer la liste des ingrédients extras
  constructor(public ingredients: ProductsService) {}

  ngOnInit() {
    this.totalAmount();
    console.log(this.totalExtras);
    console.log(this.buttonInc);
    console.log(this.buttonDec);
  }

  increment(i: any) {
    // Je modifie DIRECTEMENT la quantité en index de mon mock
    // JE NE PASSE PAS par une variable ex. quantity = this.products[0].extras[i].quantity => qui sera commune à tous les compteurs et incrémentera donc tous les compteurs
    if (
      this.products[0].products[0].extras[i].quantity <
      this.products[0].products[0].extras[i].maxQuantity
    ) {
      // J'incrémente la quantité
      this.products[0].products[0].extras[i].quantity++;
      // J'incrémente mon total de la valeur € de l'extra
      this.totalAmount();
      return;
    } else if (this.products[0].products[0].extras[i].quantity ==
      this.products[0].products[0].extras[i].maxQuantity){
      // Implémenter le switch de couleur des buttons ici
      this.buttonInc?.nativeElement.classList.toggle('counter-plus');
      this.buttonInc?.nativeElement.classList.toggle('counter-minus');
      this.buttonDec?.nativeElement.classList.toggle('counter-minus');
      this.buttonDec?.nativeElement.classList.toggle('counter-plus');

      this.products[0].products[0].extras[i].maxQuantity;
    }
  }

  decrement(i: any) {
    // Je modifie DIRECTEMENT la quantité en index de mon mock
    // JE NE PASSE PAS par une variable ex. quantity = this.products[0].extras[i].quantity => qui sera commune à tous les compteurs et incrémentera donc tous les compteurs
    if (this.products[0].products[0].extras[i].quantity > this.limitDown) {
      // Je décrémente
      this.products[0].products[0].extras[i].quantity--;
      // Je décrémente mon total de la valeur € de l'extra
      this.totalAmount();
      return;
    }
    return (this.products[0].products[0].extras[i].maxQuantity =
      this.limitDown);
  }

  totalAmount() {
    // On travaille directement sur le mock et sur la liste des extras
    this.totalExtras = this.products[0].products[0].extras.reduce(
      (acc, current) => {
        // Le reduce va scanner tous les extras (25)
        console.log('enter reduce');
        return (acc += current.quantity * current.additionalPrice);
      },
      // On prend comme base de l'accumulateur, le prix de la pizza auquel les extras vont se greffer
      this.products[0].products[0].price
    );
  }
}
