import {Component, OnInit} from '@angular/core';
import {IProduct, IProductsPreview} from "../shared/interfaces/product";
import {ProductsService} from "../shared/services/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public productsPreviewData: IProductsPreview;

  constructor(private productsService: ProductsService) {
    this.productsPreviewData = {
      title: 'Most Popular Products',
      link: '/products',
      buttonText: 'View All',
      products: []
    }
  }

  public initProductsList(): void {
    const limit = 3;
    this.productsService.getMostPopularProducts(limit).subscribe(
      (products: IProduct[]) => {
        this.productsPreviewData.products = products;
      });
  }

  ngOnInit(): void {
    this.initProductsList();
  }

}
