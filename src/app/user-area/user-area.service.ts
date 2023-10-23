import { Injectable } from '@angular/core';
import { PasswordGenProxyService } from '../infrastructure/password-gen-proxy/password-gen-proxy.service';
import { ManageTokenService as ManagerTokenService } from '../infrastructure/token-manager/manage-token.service';
import { Password } from '../infrastructure/Domain/password';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface UserAreaResult {
  isSuccess: boolean,
  errorMessage: string | null
}

@Injectable({
  providedIn: 'root'
})
export class UserAreaService {

  constructor(private proxy: PasswordGenProxyService, private tokenManager: ManagerTokenService) {
  }

  getPassword$(namePassword: string): Observable<Password> {
    return this.proxy.getPassword$(namePassword, this.tokenManager.getToken()).pipe(
      map(dto => {
        return { key: dto.name, value: dto.password }
      })
    )
  }

  createPassword$(namePassword: string, password: string): Observable<string> {
    return this.proxy.postPassword$(namePassword, password, this.tokenManager.getToken()).pipe(
      map(x => x)
    )
  }



  deletePassword$(namePassword: string): Observable<UserAreaResult> {
    return this.proxy.deletePassword$(namePassword, this.tokenManager.getToken()).pipe(
      map(() => { return { isSuccess: true, errorMessage: null } }),
      catchError(e => {
        if (e instanceof HttpErrorResponse)
          return of({
            isSuccess: false,
            errorMessage: (e as HttpErrorResponse).message
          })
        throw e
      })
    )
  }


  changeCurrentUser$(newUsername: string, newPassword: string): Observable<string> {
    return this.proxy.putUser$(newUsername, newPassword, this.tokenManager.getToken()).pipe(
      map(x => x)
    )
  }
  deleteCurrentUser$(): Observable<string> {
    return this.proxy.deleteUser$(this.tokenManager.getToken()).pipe(
      map(x => x)
    )
  }
  getCurrentUsername$(): Observable<string> {
    return this.proxy.getUser$(this.tokenManager.getToken()).pipe(
      map(x => {
        return x.usernameUtente
      })
    )

  }
}
