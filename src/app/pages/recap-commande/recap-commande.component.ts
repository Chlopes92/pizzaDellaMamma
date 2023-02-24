import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-recap-commande',
  templateUrl: './recap-commande.component.html',
  styleUrls: ['./recap-commande.component.css']
})
export class RecapCommandeComponent {
  constructor(private cartService :CartService,
    private tableService: TableService
    ){}
    
table :number[] =this.tableService.newTable;

resetcart(){
  this.cartService.resetCart();
  
}
getTotalPrice():number{
  return  this.cartService.getTotalPrice();
  }

}
