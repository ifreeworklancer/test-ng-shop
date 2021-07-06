import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../shared/interfaces/product";

@Component({
  selector: 'app-products-archive',
  templateUrl: './products-archive.component.html',
  styleUrls: ['./products-archive.component.scss']
})
export class ProductsArchiveComponent implements OnInit {

  constructor() {
  }

  public changeProductList(value: IProduct[]): void {
    console.log(value)
  }

  ngOnInit(): void {
  }

}
