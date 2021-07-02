import {Component, OnInit} from '@angular/core';
import {IProductsPreview} from "../shared/interfaces/product";
import {Observable} from "rxjs";
import {ProductsService} from "../shared/services/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public productsPreviewData: IProductsPreview;
  public products$: Observable<any>;

  constructor(private productsService: ProductsService) {
    this.productsPreviewData = {
      title: 'Most Popular Products',
      link: '/products',
      buttonText: 'View All',
      products: []
    }
    this.products$ = this.productsService.products$;
  }

  ngOnInit(): void {
    this.productsService.getMostPopularProducts();
  }

}
