import { Injectable } from '@angular/core';
import { PasswordGenProxyService } from '../infrastructure/password-gen-proxy/password-gen-proxy.service';
import { ManageTokenService as ManagerTokenService } from '../infrastructure/token-manager/manage-token.service';
import { Password } from '../infrastructure/Domain/password';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Result } from '../infrastructure/DTOs/result';

@Injectable({
  providedIn: 'root',
})
export class UserAreaService {
  constructor(
    private proxy: PasswordGenProxyService,
    private tokenManager: ManagerTokenService,
  ) {}

  getPassword$(namePassword: string): Observable<Result> {
    return this.proxy
      .getPassword$(namePassword, this.tokenManager.getToken())
      .pipe(
        map((dto) => {
          return {
            isSuccess: true,
            result: { key: dto.name, value: dto.password },
          };
        }),
        catchError((e) => {
          return of({ isSuccess: false, errorMessage: e['error'] });
        }),
      );
  }

  createPassword$(namePassword: string, password: string): Observable<Result> {
    return this.proxy
      .postPassword$(namePassword, password, this.tokenManager.getToken())
      .pipe(
        map((dto) => {
          return { isSuccess: true, result: dto };
        }),
        catchError((e) => {
          return of({ isSuccess: false, errorMessage: e['error'] });
        }),
      );
  }

  deletePassword$(namePassword: string): Observable<Result> {
    return this.proxy
      .deletePassword$(namePassword, this.tokenManager.getToken())
      .pipe(
        map((x) => {
          return { isSuccess: true, result: x };
        }),
        catchError((e) => {
          return of({ isSuccess: false, errorMessage: e['error'] });
        }),
      );
  }

  changeCurrentUser$(
    newUsername: string,
    newPassword: string,
  ): Observable<Result> {
    return this.proxy
      .putUser$(newUsername, newPassword, this.tokenManager.getToken())
      .pipe(
        map((x) => {
          return { isSuccess: true, result: x };
        }),
        catchError((e) => {
          return of({ isSuccess: false, errorMessage: e['error'] });
        }),
      );
  }
  deleteCurrentUser$(): Observable<Result> {
    return this.proxy.deleteUser$(this.tokenManager.getToken()).pipe(
      map((x) => {
        return { isSuccess: true, result: x };
      }),
      catchError((e) => {
        return of({ isSuccess: false, errorMessage: e['error'] });
      }),
    );
  }
  getCurrentUsername$(): Observable<Result> {
    return this.proxy.getUser$(this.tokenManager.getToken()).pipe(
      map((x) => {
        return { isSuccess: true, result: x };
      }),
      catchError((e) => {
        return of({ isSuccess: false, errorMessage: e['error'] });
      }),
    );
  }
}
