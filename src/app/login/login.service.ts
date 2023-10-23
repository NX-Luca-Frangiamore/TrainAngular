import { Injectable } from '@angular/core';
import { PasswordGenProxyService } from '../infrastructure/password-gen-proxy/password-gen-proxy.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly passwordGenProxyService: PasswordGenProxyService) { }


  logIn$(username: string, password: string): Observable<string> {
    return this.passwordGenProxyService.logIn$(username, password)
  }
  SignIn$(username: string, password: string): Observable<string> {
    return this.passwordGenProxyService.signIn$(username, password)
  }

}
