import { Injectable } from '@angular/core';
import { PasswordGenProxyService } from '../infrastructure/password-gen-proxy/password-gen-proxy.service';
import { ManageTokenService as ManagerTokenService } from '../manage-token.service';
import { Password } from '../infrastructure/Domain/password';
import { Observable, map } from 'rxjs';
import { GetPassword } from '../infrastructure/DTOs/get-password';
@Injectable({
  providedIn: 'root'
})
export class UserAreaService {

  constructor(private proxy:PasswordGenProxyService,private tokenManager:ManagerTokenService) { 
      
  }
  getPassword(namePassword:string):Observable<Password>{
     return this.proxy.getPassword(namePassword,this.tokenManager.getToken()).pipe(
      map((x:GetPassword)=>{
          let p=new Password()
          p.name=x.Name
          p.password=x.Password
          return p
      })
    )
  }

  NewPassword(namePassword:string,password:string):Observable<string>{
    return this.proxy.NewPassword(namePassword,password,this.tokenManager.getToken()).pipe(
     map(x=>x)
   )
 }
  deleteUtente():Observable<string>{
    return this.proxy.deleteUser(this.tokenManager.getToken()).pipe(
    map(x=>x)
  )
}
}
