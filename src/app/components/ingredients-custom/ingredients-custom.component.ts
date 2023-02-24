import { Component } from '@angular/core';
import {
  IProduct,
  IProductsByCategory,
  PRODUCTS,
} from 'src/app/mocks/productsfiltre.mock';


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
  // Propriété switch liée au [class] dans le html et au css
  colorSwitch: boolean = false;

  // Je récupère mon service où j'ai implémenté ma méthode pour récupérer la liste des ingrédients extras
  constructor() {}
  
  ngOnInit() {
    this.totalAmount();
    console.log(this.totalExtras);
    this.sortProductsByName();
    console.log(this.sortProductsByName())
  }
  
  // Changement du style des boutons du compteur (changent tous pour le moment)
  changeStyle(i: any) {
    this.colorSwitch = true;
  }

  // Incrément du compteur
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
    } else if (this.products[0].products[0].extras[i].quantity ===
      this.products[0].products[0].extras[i].maxQuantity){
      // Je change la couleur du bouton + et du Bouton -
      this.changeStyle(i);
    }
  }

  // Décrément du compteur
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
  }

  // Calcul du cumul des tarifs extras
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

  // Trie alphabétique de la liste des extras avec la méthode sort + localeCompare =>
  // Pour des chaines de caractères contenant des caractères non ASCII, c'est à dire des chaines de caractères contenant par exemple des accents (é, è, a, ä, etc.) : utilisez String.localeCompare. Cette fonction peut comparer ces caractères afin qu'ils apparaissent dans le bon ordre.
  sortProductsByName() {
    return this.products[0].products[0].extras.sort((a, b) => a.ingredient.title.localeCompare(b.ingredient.title));
  }
}
