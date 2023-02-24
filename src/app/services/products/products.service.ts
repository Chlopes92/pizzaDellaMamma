import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { IExtraIngredient, IIncludedIngredient, IProduct, ProductCategoryType, PRODUCTS } from 'src/app/mocks/products.mock';
import { IProduct, IProductsByCategory, PRODUCTS } from 'src/app/mocks/productsfiltre.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product!:IProduct;
  productList:IProductsByCategory[]=PRODUCTS;
  constructor(
    private activatedRoute:ActivatedRoute
    ){}
  
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

  // getCategoryProduct(category: ProductCategoryType): IProduct[] {
  //   return PRODUCTS.filter(categoryProduct => categoryProduct.category === category)
  // }
   //retourne un produit par id
  //  getProduct(id:number): IProductsByCategory | undefined{
  //   return PRODUCTS.find(product => product.id ===id);
  //  }
//   getProduct(id:any){

//      let productId=PRODUCTS.find(product=>product.products[id].id=== id);
// console.log(productId);
//      return productId;
//   }
    
  // Théoriquement Retourne la liste des ingrédients inclus
  // getIncludedIngredients(included: IIncludedIngredient[]): IProduct[] {
  //   return PRODUCTS.filter(incIngredient => incIngredient.includedIngredients === included)
  // }
  // // Théoriquement Retourne la liste des ingrédients en extra
  // getExtrasIngredients(extras: IExtraIngredient[]): IProduct[] {
  //   return PRODUCTS.filter(extIngredient => extIngredient.extras === extras)
  // }
  // getProduct(categoryI:any ,idproduct:any){
  //   const idproductURL=Number(this.activatedRoute.snapshot.paramMap.get("id"));
  //   const categoryURL=this.activatedRoute.snapshot.paramMap.get("category");
  //   const categoryL = this.productList.find((p) => p.category === categoryI);
    
  //   console.log("url de category",categoryURL);
  //   console.log("url de product",idproductURL);
  //   console.log("categoryl",categoryL);
    
    
  //   if (!categoryL) return;
  //   let product2=categoryL.products.find((p) => p.id === idproduct)
  //   console.log( product2);
    
  //   return categoryL.products.find((p) => p.id === idproduct)
    
    
    
  // }

}
