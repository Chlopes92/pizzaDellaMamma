import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BasketComponent } from 'src/app/pages/basket/basket.component';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-card-product-cart',
  templateUrl: './card-product-cart.component.html',
  styleUrls: ['./card-product-cart.component.css']
})
export class CardProductCartComponent {
  url!: string;
  constructor(
    public cartService: CartService,
    public basket: BasketComponent, 
    private router:Router
    ){
  }
  @Input() cartProduct! : CartProduct;
  @Input() index! : number;
  cart: CartProduct[] = [];
  ngOnInit(){
    this.getUrl();
  }
  removeProduct(){
   
    this.basket.removeProduct(this.index);
  }
  getUrl(){
    if( this.router.url.includes('basket'))
    {
      this.url='basket';
    }
    else if( this.router.url.includes('recapCommande'))
    {

      this.url='recapCommande';
    }
}
}