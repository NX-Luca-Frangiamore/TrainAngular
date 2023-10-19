import { Injectable } from '@angular/core';
import { PasswordGenProxyService } from '../infrastructure/password-gen-proxy/password-gen-proxy.service';
import { ManageTokenService as ManagerTokenService } from '../infrastructure/token-manager/manage-token.service';
import { Password } from '../infrastructure/Domain/password';
import { User } from '../infrastructure/Domain/user';
import { Observable, map } from 'rxjs';
import { DTOGetPassword } from '../infrastructure/DTOs/get-password';
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
  changeUser(newUsername: string, newPassword: string): Observable<string> {
    return this.proxy.putUser$(newUsername, newPassword, this.tokenManager.getToken()).pipe(
      map(x => x)
    )
  }
  deleteUser(): Observable<string> {
    return this.proxy.deleteUser$(this.tokenManager.getToken()).pipe(
      map(x => x)
    )
  }
  getUser(): Observable<User> {
    return this.proxy.getUser$(this.tokenManager.getToken()).pipe(
      map(dto => {
        return { name: dto.usernameUtente, password: '' }
      })
    )

  }
}
