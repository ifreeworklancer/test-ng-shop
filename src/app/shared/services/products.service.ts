import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {IProduct} from "../interfaces/product";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  public getAllProducts() {
    return this.http.get<IProduct[]>(environment.apiUri.concat('products'))
  }

  public getSingleProduct(id: string) {
    return this.http.get<IProduct>(environment.apiUri.concat(`products/${id}`))
  }

  public getMostPopularProducts(limit: number) {
    const params = new HttpParams().set('limit', limit)
    return this.http.get<IProduct[]>(environment.apiUri.concat('products'), {params})
  }

  public getAllCategories() {
    return this.http.get<[]>(environment.apiUri.concat('products/categories'))
  }

  public getProductsInSpecificCategory(category: string) {
    return this.http.get<[]>(environment.apiUri.concat(`products/category/${category}`));
  }
}
