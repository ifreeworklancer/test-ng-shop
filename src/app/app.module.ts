import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AppMaterialModule} from "./shared/app-material/app-material.module";
import {NailComponent} from './components/banner/nail/nail.component';
import {ProductsPreviewComponent} from './components/preview/products-preview/products-preview.component';
import {ProductCardComponent} from './components/card/product-card/product-card.component';
import {ProductsArchiveComponent} from './products/products-archive/products-archive.component';
import {ProductsSingleComponent} from './products/products-single/products-single.component';
import {ProductsFilterComponent} from './components/filter/products-filter/products-filter.component';
import {ProductsCatalogComponent} from './components/catalog/products-catalog/products-catalog.component';
import {FullscreenLoaderComponent} from './components/loader/fullscreen-loader/fullscreen-loader.component';
import {BasketButtonComponent} from './components/basket/basket-button/basket-button.component';
import {BasketComponent} from './basket/basket.component';
import {BasketListComponent} from './components/basket/basket-list/basket-list.component';
import {BasketItemComponent} from './components/basket/basket-item/basket-item.component';
import {LoginComponent} from './auth/login/login.component';
import {LoginFormComponent} from './components/form/auth/login-form/login-form.component';
import {JwtInterceptor} from "./shared/interceptors/jwt.interceptor";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NailComponent,
    ProductsPreviewComponent,
    ProductCardComponent,
    ProductsArchiveComponent,
    ProductsSingleComponent,
    ProductsFilterComponent,
    ProductsCatalogComponent,
    FullscreenLoaderComponent,
    BasketButtonComponent,
    BasketComponent,
    BasketListComponent,
    BasketItemComponent,
    LoginComponent,
    LoginFormComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
