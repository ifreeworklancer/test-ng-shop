import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() {

  }

  get getBasket(): any {
    if (localStorage.getItem('basket')) {
      return JSON.parse(<string>localStorage.getItem('basket'));
    }
    return [];
  }

  public setBasket(id: string): void {
    if (!this.isAlreadyBasketItem(id)) {
      let newBasketItem = this.getBasket;
      newBasketItem.push(id);
      localStorage.setItem('basket', JSON.stringify(newBasketItem));
    }
  }

  public removeBasketItem(id: string): void {
    let newBasketItem = this.getBasket,
      alreadyBasketItemIndex = newBasketItem.findIndex((item: string) => item === id);
    if (alreadyBasketItemIndex !== null) {
      newBasketItem.splice(alreadyBasketItemIndex, 1);
      localStorage.setItem('basket', JSON.stringify(newBasketItem));
    }
  }

  public removeAllBasket(): void {
    localStorage.removeItem('basket');
  }

  public isAlreadyBasketItem(id: string): boolean {
    if (!this.getBasket) {
      return false;
    }
    return Boolean(this.getBasket.find((item: string) => item === id));
  }
}
