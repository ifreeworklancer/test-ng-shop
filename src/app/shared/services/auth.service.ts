import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private fireAuth: AngularFireAuth) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  get isLoginCurrentUser(): boolean {
    return Boolean(this.currentUserValue) && Boolean(this.currentUserValue.token);
  }

  public login({email, password}: any): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        if (user && user.refreshToken) {
          let currentUserObject = {uid: user.uid, token: user.refreshToken};
          localStorage.setItem('currentUser', JSON.stringify(currentUserObject));
          this.currentUserSubject.next(currentUserObject);
        }
      })
  }

  public logout(): any {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
