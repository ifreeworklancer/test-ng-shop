import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  public getMostPopularProducts(limit: number) {
    const params = new HttpParams().set('limit', limit)
    return this.http.get<any>(environment.apiUri.concat('products'), {params})
  }
}
