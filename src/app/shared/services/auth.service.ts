import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  get isLoginCurrentUser(): boolean {
    return Boolean(this.currentUserValue) && Boolean(this.currentUserValue.token);
  }

  login(payload: object): any {
    return this.http.post<any>(environment.apiUri.concat('auth/login'), payload)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout(): any {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
