import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from "../../../shared/services/basket.service";

@Component({
  selector: 'app-basket-button',
  templateUrl: './basket-button.component.html',
  styleUrls: ['./basket-button.component.scss']
})
export class BasketButtonComponent implements OnInit {
  @Input() productID?: number;
  public isAlready: boolean = false;

  constructor(private basketService: BasketService) {
  }

  public initBasketAlready(): void {
    this.basketService.basket$?.subscribe(data => {
      this.isAlready = this.basketService.isAlreadyBasketItem(String(this.productID))
    })
  }

  public handleBasketClick(): void {
    if (!this.basketService.isAlreadyBasketItem(String(this.productID))) {
      this.basketService.setBasket(String(this.productID));
      return;
    }
    this.basketService.removeBasketItem(String(this.productID));
  }

  ngOnInit(): void {
    this.initBasketAlready();
  }

}
