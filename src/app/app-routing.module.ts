import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsArchiveComponent} from "./products/products-archive/products-archive.component";
import {ProductsSingleComponent} from "./products/products-single/products-single.component";
import {BasketComponent} from "./basket/basket.component";
import {LoginComponent} from "./auth/login/login.component";
import {LoginGuard} from "./shared/guards/login.guard";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsArchiveComponent},
  {path: 'products/:id', component: ProductsSingleComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'auth/login', canActivate: [LoginGuard], component: LoginComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
