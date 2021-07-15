import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../../shared/interfaces/product";
import {BasketService} from "../../../shared/services/basket.service";

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss']
})
export class BasketListComponent implements OnInit {
  @Input() basketList?: IProduct[];
  @Input() basketTotal?: number;
  @Output() onRemoveBasket = new EventEmitter;

  constructor(private basketService: BasketService) {
  }

  public removeAllBasket(): void {
    this.basketService.removeAllBasket();
    this.onRemoveBasket.emit();
  }

  public removeBasketItem(): void {
    this.onRemoveBasket.emit();
  }

  ngOnInit(): void {
  }

}
