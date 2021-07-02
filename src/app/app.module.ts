import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AppMaterialModule} from "./shared/app-material/app-material.module";
import { NailComponent } from './components/banner/nail/nail.component';
import { ProductsPreviewComponent } from './components/preview/products-preview/products-preview.component';
import { ProductCardComponent } from './components/card/product-card/product-card.component';
import { ProductsArchiveComponent } from './products/products-archive/products-archive.component';
import { ProductsSingleComponent } from './products/products-single/products-single.component';

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
    ProductsSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
