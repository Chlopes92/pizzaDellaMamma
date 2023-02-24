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
// import { PizzaComponent } from './components/pizza/pizza.component';
// import { DrinkComponent } from './components/drink/drink.component';
// import { DessertComponent } from './components/dessert/dessert.component';
import { CategoryComponentComponent } from './components/category-component/category-component.component';
import { IngredientsCustomComponent } from './components/ingredients-custom/ingredients-custom.component';
import { PRODUCTSComponent } from './pages/products/products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavActionComponent } from './components/nav-action/nav-action.component';
import { RecapCommandeComponent } from './pages/recap-commande/recap-commande.component';
import { CardProductCartComponent } from './components/card-product-cart/card-product-cart.component';




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
    // PizzaComponent,
    // DrinkComponent,
    // DessertComponent,
    CategoryComponentComponent,
    IngredientsCustomComponent,
    PRODUCTSComponent,
    ProductListComponent,
    ProductCardComponent,
    FooterComponent,
    NavActionComponent,
    RecapCommandeComponent,
    CardProductCartComponent,

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
