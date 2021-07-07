import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basket$?: BehaviorSubject<[]>;

  constructor() {

  }

  get getBasket(): any {
    if (localStorage.getItem('basket')) {
      return JSON.parse(<string>localStorage.getItem('basket'));
    }
    return [];
  }

  public setBasket(id: string) {
    let newBasketItem = this.getBasket;
    newBasketItem.push(id);
    localStorage.setItem('basket', JSON.stringify(newBasketItem));
  }

  public isAlreadyBasketItem(id: string): boolean {
    if (!this.getBasket) {
      return false;
    }
    return Boolean(this.getBasket.find((item: { id: string; }) => item.id === id));
  }
}
