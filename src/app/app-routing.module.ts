import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { CustomizationComponent } from './pages/customization/customization.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { PRODUCTSComponent } from './pages/products/products.component';
import { RecapCommandeComponent } from './pages/recap-commande/recap-commande.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  // {
  //   path: "products/:tagType",
  //   component: ProductCategoryComponent
  // },
  {
    path: "products",
    component: ProductCategoryComponent
  },
  {
    path:"PRODUCTS",
    component: PRODUCTSComponent

  },
  {
    path: "customization/:category/:id",
    component: CustomizationComponent
  },
  {
    path: "basket",
    component: BasketComponent
  },
  {
    path: "recapCommande",
    component: RecapCommandeComponent
  },
  {
    path: "orderConfirmation",
    component: OrderConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
