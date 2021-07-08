import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../shared/services/basket.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public basketLength: number = 0;

  constructor(private basketService: BasketService) {
  }

  public intiBasketLength(): void {
    this.basketService.basket$.subscribe(basket => {
      this.basketLength = basket.length;
    })
  }

  ngOnInit(): void {
    this.intiBasketLength();
  }

}
