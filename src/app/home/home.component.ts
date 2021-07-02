import {Component, OnInit} from '@angular/core';
import {IProductsPreview} from "../shared/interfaces/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public productsPreviewData: IProductsPreview;

  constructor() {
    this.productsPreviewData = {
      title: 'Most Popular Products',
      link: '/products',
      buttonText: 'View All',
      products: []
    }
  }

  ngOnInit(): void {
  }

}
