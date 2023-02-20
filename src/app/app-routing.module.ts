import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { CustomizationComponent } from './pages/customization/customization.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "/products",
    component: ProductsComponent
  },
  {
    path: "/customization",
    component: CustomizationComponent
  },
  {
    path: "/basket",
    component: BasketComponent
  },
  {
    path: "/orderConfirmation",
    component: OrderConfirmationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
