import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomizationComponent } from './pages/customization/customization.component';
import { BasketComponent } from './pages/basket/basket.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomizationComponent,
    BasketComponent,
    OrderConfirmationComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
