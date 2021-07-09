import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss']
})
export class BasketListComponent implements OnInit {
  @Input() basketList?: IProduct[];
  @Output() onRemoveBasket = new EventEmitter;

  constructor() { }

  public removeBasket() {
    this.onRemoveBasket.emit();
  }

  ngOnInit(): void {
  }

}
