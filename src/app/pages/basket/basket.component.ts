import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  actionDescription: string = "Table 42 : Envoyer la commande en cuisine";
  boundedValidateCart = this.validateCart.bind(this);

  cart: CartProduct[] = [];
  constructor(public cartService: CartService,
    private tableService: TableService,
    private router: Router){
  }
  table :number[] =this.tableService.newTable;
  ngOnInit(){
    this.getCart();
  }

  getCart(){
    this.cart = this.cartService.getCart();
  }

  removeProduct(index: number){
    this.cartService.removeProductFromCart(index);
    this.getCart();
  }

  validateCart () {
   
    this.router.navigate(['/recapCommande']);
  }
getTotalPrice():number{
return this.cartService.getTotalPrice();
}
resetCart(){
  this.cartService.resetCart();
  this.getCart();
}

}
