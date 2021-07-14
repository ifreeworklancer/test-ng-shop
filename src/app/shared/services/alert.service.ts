import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Alert, AlertType} from "../model/alert.model";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  success(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.Success, message }));
  }

  error(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.Error, message }));
  }

  info(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.Info, message }));
  }

  warn(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
  }

  public alert(alert: Alert) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  public clear(id = this.defaultId) {
    this.subject.next(new Alert({ id }));
  }
}
