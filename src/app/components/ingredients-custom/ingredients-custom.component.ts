import { Component } from '@angular/core';
import { PRODUCTS, IProduct } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-ingredients-custom',
  templateUrl: './ingredients-custom.component.html',
  styleUrls: ['./ingredients-custom.component.css']
})
export class IngredientsCustomComponent {
  // Je mets en propriétés mon mocks products.mock.ts
  product!: IProduct;
  products: IProduct[] = PRODUCTS;
  // Mon compteur
  counter: number = 0;
 
ngOnInit() {

}

increment(){
this.counter += 1;
return this.counter;
}

decrement() {
  this.counter -= 1;
  return this.counter;
}
}
