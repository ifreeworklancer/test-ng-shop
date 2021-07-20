import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from "../../shared/services/basket.service";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLoginUser: boolean = false;
  public basketLength: number = 0;

  constructor(private basketService: BasketService, private authService: AuthService, private router: Router) {
  }

  public intiBasketLength(): void {
    this.basketService.basket$.subscribe(basket => {
      this.basketLength = basket.length;
    })
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['auth/login'])
  }

  ngOnInit(): void {
    this.intiBasketLength();
  }

}
