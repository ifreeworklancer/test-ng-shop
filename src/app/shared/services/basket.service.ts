import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProductsService} from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basket$: BehaviorSubject<[]>;

  constructor(private productsService: ProductsService) {
    this.basket$ = new BehaviorSubject<[]>(this.getBasket);
    this.getProductBasket();
  }

  get getBasket(): any {
    if (localStorage.getItem('basket')) {
      return JSON.parse(<string>localStorage.getItem('basket'));
    }
    return [];
  }

  public getProductBasket(): Observable<any> {
    return new Observable<any>((subscriber) => {
      this.productsService.getAllProducts().subscribe((products) => {
        if (this.getBasket.length) {
          let productsBasket = this.getBasket.map((basketItem: number) => {
            return products.find(product => String(product.id) === String(basketItem))
          })
          subscriber.next(productsBasket);
          return;
        }
        subscriber.next([]);
        subscriber.complete();
      })
    })
  }

  public setBasket(id: string): void {
    if (!this.isAlreadyBasketItem(id)) {
      let newBasketItem = this.getBasket;
      newBasketItem.push(id);
      localStorage.setItem('basket', JSON.stringify(newBasketItem));
      this.basket$?.next(this.getBasket)
      this.getProductBasket();
    }
  }

  public removeBasketItem(id: string): void {
    let newBasketItem = this.getBasket,
      alreadyBasketItemIndex = newBasketItem.findIndex((item: string) => item === id);
    if (alreadyBasketItemIndex !== null) {
      newBasketItem.splice(alreadyBasketItemIndex, 1);
      localStorage.setItem('basket', JSON.stringify(newBasketItem));
      this.basket$?.next(this.getBasket)
      this.getProductBasket();
    }
  }

  public removeAllBasket(): void {
    localStorage.removeItem('basket');
    this.basket$?.next(this.getBasket)
    this.getProductBasket();
  }

  public isAlreadyBasketItem(id: string): boolean {
    if (!this.getBasket) {
      return false;
    }
    return Boolean(this.getBasket.find((item: string) => item === id));
  }
}
