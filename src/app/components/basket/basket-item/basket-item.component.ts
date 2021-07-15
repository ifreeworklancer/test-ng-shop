import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../../shared/interfaces/product";
import {BasketService} from "../../../shared/services/basket.service";

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {
  @Input() basket?: IProduct;
  @Output() onRemoveBasket = new EventEmitter;

  constructor(private basketService: BasketService) {
  }

  public removeBasketItem(): void {
    this.basketService.removeBasketItem(String(this.basket?.id));
    this.onRemoveBasket.emit();
  }

  ngOnInit(): void {
  }

}
