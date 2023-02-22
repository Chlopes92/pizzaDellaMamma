import { Injectable } from '@angular/core';
import { IProduct, ProductCategoryType, PRODUCTS } from 'src/app/mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  // retourne la liste de tous les produits
  getProducts(): IProduct[] {
    return PRODUCTS;
  }
  //retourn une categorie de produits
  getCategoryProduct(category: ProductCategoryType): IProduct[] {
    return PRODUCTS.filter(categoryProduct => categoryProduct.category === category)
  }
   //retourne un produit par id
   getProduct(id:number): IProduct | undefined{
    return PRODUCTS.find(product => product.id ===id);
  }
}
