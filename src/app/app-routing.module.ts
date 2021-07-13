import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsArchiveComponent} from "./products/products-archive/products-archive.component";
import {ProductsSingleComponent} from "./products/products-single/products-single.component";
import {BasketComponent} from "./basket/basket.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {LoginGuard} from "./shared/guards/login.guard";

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsArchiveComponent},
      {path: 'products/:id', component: ProductsSingleComponent},
      {path: 'basket', component: BasketComponent},
    ]
  },
  {path: 'login', canActivate: [LoginGuard], component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
