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
    this.basketService.setBasket(String(this.productID));
  }

  ngOnInit(): void {
  }

}
