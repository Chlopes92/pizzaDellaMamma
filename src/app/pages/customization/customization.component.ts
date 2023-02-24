import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, IProductsByCategory, PRODUCTS } from 'src/app/mocks/productsfiltre.mock';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent {
  
  product!:IProduct;
  idproductURL!:number;
  categoryURL!:string |null;
  productList:IProductsByCategory[]=PRODUCTS;
  constructor(
    private activatedRoute:ActivatedRoute
    ){}
    ngOnInit(){
     
      this.idproductURL=Number(this.activatedRoute.snapshot.paramMap.get("id"));
      this.categoryURL=this.activatedRoute.snapshot.paramMap.get("category");
       console.log("type",typeof(this.activatedRoute.snapshot.paramMap.get("category")));
       this.getProduct(this.categoryURL,this.idproductURL);
    }
    getProduct(category:any ,idproduct:number){
     
      
      const categoryL = this.productList.find((p) => p.category === category);
      
      console.log("url de category",category);
      console.log("url de product",idproduct);
      console.log("categoryl",categoryL);
      
      
      if (!categoryL) return;
      let product2=categoryL.products.find((p) => p.id === idproduct)
      console.log( product2);
      if(product2){
        this.product=product2;
      }
      
      return categoryL.products.find((p) => p.id === idproduct)
      
    }
  }