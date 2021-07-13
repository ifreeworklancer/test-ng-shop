import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../shared/services/auth.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  public passwordHidden: boolean = true;
  public isLoading: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public changePasswordsType(): void {
    this.passwordHidden = !this.passwordHidden;
  }

  get getEmailErrorMessage(): String {
    if (this.loginForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  public getFieldError(formField: string) {
    let formFieldControl = this.loginForm.controls[formField]
    if (formFieldControl && formFieldControl.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  public submitForm() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['/'])
        this.isLoading = false
      }, () => {
        this.isLoading = false
      })
  }

  ngOnInit(): void {
  }

}
