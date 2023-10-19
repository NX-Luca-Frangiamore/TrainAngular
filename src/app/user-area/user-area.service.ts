import { Injectable } from '@angular/core';
import { PasswordGenProxyService } from '../infrastructure/password-gen-proxy/password-gen-proxy.service';
import { ManageTokenService as ManagerTokenService } from '../infrastructure/token-manager/manage-token.service';
import { Password } from '../infrastructure/Domain/password';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAreaService {

  constructor(private proxy: PasswordGenProxyService, private tokenManager: ManagerTokenService) {
  }

  getPassword(namePassword: string): Observable<Password> {
    return this.proxy.getPassword(namePassword, this.tokenManager.getToken()).pipe(
      map(dto => {
        return { key: dto.name, value: dto.password }
      })
    )
  }

  createPassword(namePassword: string, password: string): Observable<string> {
    return this.proxy.postPassword(namePassword, password, this.tokenManager.getToken()).pipe(
      map(x => x)
    )
  }
  changeCurrentUser(newUsername: string, newPassword: string): Observable<string> {
    return this.proxy.putUser$(newUsername, newPassword, this.tokenManager.getToken()).pipe(
      map(x => x)
    )
  }
  deleteCurrentUser(): Observable<string> {
    return this.proxy.deleteUser$(this.tokenManager.getToken()).pipe(
      map(x => x)
    )
  }
  getCurrentUsername(): Observable<string> {
    return this.proxy.getUser$(this.tokenManager.getToken()).pipe(
      map(username => {
        return username
      })
    )

  }
}
