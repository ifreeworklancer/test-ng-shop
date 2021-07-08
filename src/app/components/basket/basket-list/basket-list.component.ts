import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss']
})
export class BasketListComponent implements OnInit {
  @Input() basketList?: IProduct[];

  constructor() { }

  ngOnInit(): void {
  }

}
