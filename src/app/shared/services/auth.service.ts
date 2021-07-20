import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject$: BehaviorSubject<any>;
  private userRole$: BehaviorSubject<string> = new BehaviorSubject<string>('customer');
  public currentUser: Observable<any>;

  constructor(private fireAuth: AngularFireAuth, private fireStore: AngularFirestore) {
    this.currentUserSubject$ = new BehaviorSubject<any>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject$.asObservable();
    this.getUserRole();
  }

  get currentUserValue(): any {
    return this.currentUserSubject$.value;
  }

  get isLoginCurrentUser(): boolean {
    return Boolean(this.currentUserValue) && Boolean(this.currentUserValue.token);
  }

  get isCurrentUserSuperAdmin(): boolean {
    if (!this.isLoginCurrentUser) {
      return false;
    }
    return this.userRole$.value === 'superadmin';
  }

  private getUserRole() {
    if (this.currentUserValue?.uid) {
      this.fireStore.collection('users').doc(this.currentUserValue.uid).get().subscribe((userDoc: any) => {
        this.fireStore.collection('roles').doc(userDoc.data().role_id).get().subscribe((roleDoc: any) => {
          this.userRole$.next(roleDoc.data().role)
        })
      })
      return;
    }
    this.userRole$.next('customer');
  }

  public login({email, password}: any): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        if (user && user.refreshToken) {
          let currentUserLocalStorage = {uid: user.uid, token: user.refreshToken};
          localStorage.setItem('currentUser', JSON.stringify(currentUserLocalStorage));
          this.currentUserSubject$.next(currentUserLocalStorage);
          this.getUserRole();
        }
      })
  }

  public logout(): any {
    localStorage.removeItem('currentUser');
    this.currentUserSubject$.next(null);
    this.getUserRole();
  }
}
