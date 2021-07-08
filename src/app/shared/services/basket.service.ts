import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProductsService} from "./products.service";
import {IProduct} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basket$: BehaviorSubject<[]>;
  public productsBasket$: BehaviorSubject<IProduct[] | []> = new BehaviorSubject<IProduct[]|[]>([]);

  constructor(private productsService: ProductsService) {
    this.basket$ = new BehaviorSubject<[]>(this.getBasket);
  }

  get getBasket(): any {
    if (localStorage.getItem('basket')) {
      return JSON.parse(<string>localStorage.getItem('basket'));
    }
    return [];
  }

  get getBasketProduct(): any {
    if (localStorage.getItem('basket')) {
      this.productsService.getAllProducts().subscribe((products) => {
        let productsBasket = this.getBasket.map((basketItem: number) => {
          return products.find(product => String(product.id) === String(basketItem))
        })
        this.productsBasket$.next(productsBasket);
        console.log(this.productsBasket$)
        return productsBasket;
      })
    }
    this.productsBasket$?.next([]);
    return [];
  }

  public setBasket(id: string): void {
    if (!this.isAlreadyBasketItem(id)) {
      let newBasketItem = this.getBasket;
      newBasketItem.push(id);
      localStorage.setItem('basket', JSON.stringify(newBasketItem));
      this.basket$?.next(this.getBasket)
    }
  }

  public removeBasketItem(id: string): void {
    let newBasketItem = this.getBasket,
      alreadyBasketItemIndex = newBasketItem.findIndex((item: string) => item === id);
    if (alreadyBasketItemIndex !== null) {
      newBasketItem.splice(alreadyBasketItemIndex, 1);
      localStorage.setItem('basket', JSON.stringify(newBasketItem));
      this.basket$?.next(this.getBasket)
    }
  }

  public removeAllBasket(): void {
    localStorage.removeItem('basket');
    this.basket$?.next(this.getBasket)
  }

  public isAlreadyBasketItem(id: string): boolean {
    if (!this.getBasket) {
      return false;
    }
    return Boolean(this.getBasket.find((item: string) => item === id));
  }
}