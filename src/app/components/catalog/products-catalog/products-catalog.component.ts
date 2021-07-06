import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductsCatalogComponent implements OnInit {
  @Input() productsList?: IProduct[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
