import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {
  @Input() basket?: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
