import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {IAlert} from "../interfaces/alert";
import {NavigationStart, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject: Subject<IAlert> = new Subject<IAlert>();
  private keepAfterRouteChange: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  public getAlert(): Observable<IAlert> {
    return this.subject.asObservable();
  }

  public success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({type: 'success', text: message});
  }

  public error(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({type: 'error', text: message});
  }

  public clear() {
    this.subject.next();
  }
}
