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

  ngOnInit(): void {
    this.isLoginUser = this.authService.isLoginCurrentUser
  }
}
