import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomizationComponent } from './pages/customization/customization.component';
import { BasketComponent } from './pages/basket/basket.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NumberTableComponent } from './components/number-table/number-table.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomizationComponent,
    BasketComponent,
    OrderConfirmationComponent,
    ProductCategoryComponent,
    HeaderComponent,
    ProductDetailsComponent,
    NumberTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
