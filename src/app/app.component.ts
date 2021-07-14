import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-ng-shop';
  public isLoginUser: boolean = false;

  constructor(private authService: AuthService) {
  }

  public detectIsUserLogin() {
    this.authService.currentUser.subscribe((value) => {
      this.isLoginUser = value && value.token;
    })
  }

  ngOnInit(): void {
    this.detectIsUserLogin();
  }
}
