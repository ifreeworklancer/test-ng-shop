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
  public basketTotal: number = 0;
  public isLoading: boolean = false;

  constructor(private basketService: BasketService) {
  }

  public initBasketList(): void {
    this.isLoading = true;
    this.basketService.getProductBasket().subscribe(productsBasket => {
      this.basketList = productsBasket;
      this.basketTotal = 0;
      productsBasket.forEach((product: IProduct) => {
        this.basketTotal += parseFloat(product.price);
      })
      this.basketTotal = +this.basketTotal.toFixed(2);
      this.isLoading = false;
    })
  }

  ngOnInit(): void {
    this.initBasketList();
  }

}
