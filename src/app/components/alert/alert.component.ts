import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from "../../shared/services/alert.service";
import {Subscription} from "rxjs";
import {IAlert} from "../../shared/interfaces/alert";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public message?: IAlert;

  constructor(private alertService: AlertService) {
  }

  handlerCallAlert() {
    this.subscription = this.alertService.getAlert()
      .subscribe((res) => {
        this.message = res;
        if (res && res.type) {
          this.message.cssClass = `alert alert-${res.type}`
        }
      })
  }

  public closeAlert() {
    this.alertService.clear();
  }

  ngOnInit(): void {
    this.handlerCallAlert();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
