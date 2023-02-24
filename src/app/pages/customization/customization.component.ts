import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, IProductsByCategory, PRODUCTS } from 'src/app/mocks/productsfiltre.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent {
  // je cree une variable qui contient mon produit
  // productWitheId!:IProduct;
  //   constructor(
  //     private customService:ProductsService,
  //     private activateRoute:ActivatedRoute){}
  
  //     ngOninit(){
  //       this. getProductCustom();
  //     }
  //     getProductCustom(){
  //je recupere le id dans l'url
  // let id=Number(this.activateRoute.snapshot.paramMap.get("id"));
  //j'appelle le service avec le produit qui a le id
  
  //   const productExist=this.customService.getProduct(id);
  //  console.log('productexiste',productExist);
  //   if(productExist){
  // this.productWitheId=productExist;
  // console.log(this.productWitheId);
  // }
  // }
  product!:IProduct;
  productList:IProductsByCategory[]=PRODUCTS;
  constructor(
    private activatedRoute:ActivatedRoute
    ){}
    ngOnInit(){
      this.getProduct("pizza",2);
    }
    getProduct(categoryI:any ,idproduct:any){
      const idproductURL=Number(this.activatedRoute.snapshot.paramMap.get("id"));
      const categoryURL=this.activatedRoute.snapshot.paramMap.get("category");
      const categoryL = this.productList.find((p) => p.category === categoryI);
      
      console.log("url de category",categoryURL);
      console.log("url de product",idproductURL);
      console.log("categoryl",categoryL);
      
      
      if (!categoryL) return;
      let product2=categoryL.products.find((p) => p.id === idproduct)
      console.log( product2);
      
      return categoryL.products.find((p) => p.id === idproduct)
      
    }
    
    
    
  }
  