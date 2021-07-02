import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {
  }

  public getMostPopularProducts() {
    return this.http.get<any>(environment.apiUri.concat('products')).subscribe(
      (products: any) => {
        this.products$.next(products);
      },
      error => {
        console.error(error);
      });
  }
}
