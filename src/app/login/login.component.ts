import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service';
import { ManageTokenService as TokenManagerService } from '../infrastructure/token-manager/manage-token.service';
import { catchError, tap } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  })


  constructor(private readonly loginService: LoginService,
    private readonly tokenManagerSertvice: TokenManagerService,
    private readonly router: Router) {
  }


  onLoginClick() {
    if (!this.loginForm.valid) return

    this.loginService.logIn$(this.loginForm.controls['username'].value!, this.loginForm.controls['password'].value!).pipe(

      tap(token => this.tokenManagerSertvice.setToken(token)),
      tap(() => this.router.navigate(["home"])),

    ).subscribe()
  }

  onSinginClick() {
    if (!this.loginForm.valid) return

    this.loginService.SignIn$(this.loginForm.controls['username'].value!, this.loginForm.controls['password'].value!).pipe(
      tap(token => this.tokenManagerSertvice.setToken(token)),
      tap(() => this.router.navigate(["home"]))
    ).subscribe()
  }


}
