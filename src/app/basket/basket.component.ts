import {Component, OnInit} from '@angular/core';
import {BasketService} from "../shared/services/basket.service";
import {IProduct} from "../shared/interfaces/product";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public basketList?: IProduct[];

  constructor(private basketService: BasketService) {
  }

  public initBasketList(): void {
    this.basketService.getBasketProduct;
    this.basketService.productsBasket$.subscribe(productBasket => {
      this.basketList = productBasket;
    })
  }

  ngOnInit(): void {
    this.initBasketList();
  }

}
