import { Injectable } from '@angular/core';
import { PasswordGenProxyService } from '../infrastructure/password-gen-proxy/password-gen-proxy.service';
import { Observable, map, catchError, of } from 'rxjs';
import { Result } from '../infrastructure/DTOs/result';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private readonly passwordGenProxyService: PasswordGenProxyService,
  ) {}

  logIn$(username: string, password: string): Observable<Result> {
    return this.passwordGenProxyService.logIn$(username, password).pipe(
      map((x) => {
        return { isSuccess: true, result: x };
      }),
      catchError((e) => {
        return of({ isSuccess: false, errorMessage: e['error'] });
      }),
    );
  }
  SignIn$(username: string, password: string): Observable<Result> {
    return this.passwordGenProxyService.signIn$(username, password).pipe(
      map((x) => {
        return { isSuccess: true, result: x };
      }),
      catchError((e) => {
        return of({ isSuccess: false, errorMessage: e['error'] });
      }),
    );
  }
}
