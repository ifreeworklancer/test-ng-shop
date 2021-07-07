import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from "../../../shared/services/basket.service";

@Component({
  selector: 'app-basket-button',
  templateUrl: './basket-button.component.html',
  styleUrls: ['./basket-button.component.scss']
})
export class BasketButtonComponent implements OnInit {
  @Input() productID?: number;

  constructor(private basketService: BasketService) {
  }

  public handleBasketClick(): void {
    if (!this.basketService.isAlreadyBasketItem(String(this.productID))) {
      this.basketService.setBasket(String(this.productID));
      return;
    }
    this.basketService.removeBasketItem(String(this.productID));
  }

  ngOnInit(): void {
  }

}
