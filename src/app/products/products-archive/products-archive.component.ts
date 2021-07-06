import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../shared/interfaces/product";

@Component({
  selector: 'app-products-archive',
  templateUrl: './products-archive.component.html',
  styleUrls: ['./products-archive.component.scss']
})
export class ProductsArchiveComponent implements OnInit {
  public isLoading: boolean = false;
  public productsList?: IProduct[];

  constructor() {
  }

  public changeProductList(value: IProduct[]): void {
    this.productsList = value;
  }

  public changeLoader(value: boolean): void {
    this.isLoading = value;
  }

  ngOnInit(): void {
  }

}
