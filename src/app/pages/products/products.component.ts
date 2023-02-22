import { Component, Input } from '@angular/core';
import { IProductsByCategory, PRODUCTS } from 'src/app/mocks/productsfiltre.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class PRODUCTSComponent {
  // je cree une variable  nameCategories qui prends mes categories cad titre ,produits
  //et je vais boucler cette variable dans le htm
  nameCategories:IProductsByCategory[]=PRODUCTS;
}
