import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/mocks/productsfiltre.mock';
import { ProductsService } from '../products/products.service';
import { TableService } from '../table/table.service';
export interface CartProduct{
  product: IProduct;
  
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalPrice:number = 0;
  constructor( 
    private productsService: ProductsService,
    private router: Router
    ) { }
    private createCart(){
      const newCart :  CartProduct[] = [];
      const newCarstString = JSON.stringify(newCart);
      localStorage.setItem('cart', newCarstString);
    }
    private saveCart(cart: CartProduct[]){
      localStorage.setItem('cart', JSON.stringify(cart));
    } 
    getCart(){
      const cart = localStorage.getItem('cart')
      if (cart){
        return JSON.parse(cart);
      } else {
        this.createCart();
        this.getCart();
      }
    } 
    addProductToCart(cartProduct: CartProduct){
      const cart = this.getCart();
          // On regarde si le produit existe
      const existingProduct = cart.find((product:CartProduct) => product.product.id === cartProduct.product.id);
    }
    removeProductFromCart (index:number){
      const cart = this.getCart();
      cart.splice(index,1);
      this.saveCart(cart);
      this.getTotalPrice();
    }

    getTotalPrice() :number{
      const cart = this.getCart();
      //calcul prix total
      // accumulator = nouvelle valeur retournée à chaque tour de boucle, initialisée à 0
      const total = cart.reduce((accumulator:number, currentValue:CartProduct) => {
        // récupère produit directement dans le mock
        const product = this.productsService.getProduct(currentValue.product.id);
      },0);
      // On assigne la valeur du total à la propriété totalPrice
      this.totalPrice = total;
      return this.totalPrice;
    }

    resetCart(){
      this.createCart();
      this.getTotalPrice();
    } 
  
    initCart(){
      this.getCart();
      this.getTotalPrice();
    }


}
