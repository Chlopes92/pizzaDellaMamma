import { Injectable } from '@angular/core';
import { IExtraIngredient, IIncludedIngredient, IProduct, ProductCategoryType, PRODUCTS } from 'src/app/mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  // constructor() { }
  // // retourne la liste de tous les produits
  // getProducts(): IProduct[] {
  //   return PRODUCTS;
  // }

  // //retourn une categorie de produits

  // // Théoriquement retourne un seul produit
  // getOneProduct(id: number): IProduct[] {
  //   return PRODUCTS.filter(index => index.id === id)
  // }
  // //retourne une categorie de produits


  // getCategoryProduct(category: ProductCategoryType): IProduct[] {
  //   return PRODUCTS.filter(categoryProduct => categoryProduct.category === category)
  // }
  //  //retourne un produit par id
  //  getProduct(id:number): IProduct | undefined{
  //   return PRODUCTS.find(product => product.id ===id);
  //  } 
  // // Théoriquement Retourne la liste des ingrédients inclus
  // getIncludedIngredients(included: IIncludedIngredient[]): IProduct[] {
  //   return PRODUCTS.filter(incIngredient => incIngredient.includedIngredients === included)
  // }
  // // Théoriquement Retourne la liste des ingrédients en extra
  // getExtrasIngredients(extras: IExtraIngredient[]): IProduct[] {
  //   return PRODUCTS.filter(extIngredient => extIngredient.extras === extras)
  // }

  getCategoryProduct(category: ProductCategoryType): IProduct[] {
    return PRODUCTS.filter(categoryProduct => categoryProduct.category === category)
  }
   //retourne un produit par id
   getProduct(id:number): IProduct | undefined{
    return PRODUCTS.find(product => product.id ===id);
   }
    
  // Théoriquement Retourne la liste des ingrédients inclus
  getIncludedIngredients(included: IIncludedIngredient[]): IProduct[] {
    return PRODUCTS.filter(incIngredient => incIngredient.includedIngredients === included)
  }
  // Théoriquement Retourne la liste des ingrédients en extra
  getExtrasIngredients(extras: IExtraIngredient[]): IProduct[] {
    return PRODUCTS.filter(extIngredient => extIngredient.extras === extras)
  }

}
