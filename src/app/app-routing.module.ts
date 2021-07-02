import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsArchiveComponent} from "./products/products-archive/products-archive.component";
import {ProductsSingleComponent} from "./products/products-single/products-single.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsArchiveComponent},
  {path: 'products/:id', component: ProductsSingleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
