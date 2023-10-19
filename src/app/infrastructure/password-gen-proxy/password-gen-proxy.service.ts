import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPassword } from '../DTOs/get-password';
import { LogInRequestDto } from '../DTOs/log-in-request.dto';
import { User } from '../DTOs/user';
@Injectable({
  providedIn: 'root'
})
export class PasswordGenProxyService {

  private readonly baseUrl = '' // TODO: mettere url

  constructor(private readonly http: HttpClient) { }

  logIn$(username: string, pasword: string): Observable<string> {
    const dto: LogInRequestDto = {
      username: username,
      password: pasword
    }

    return this.http.post<string>(this.baseUrl + '/login', dto)
  }
  getUser(token: string | null):Observable<User>{
    let header={ Authorization: "Bearer " + token }
    return this.http.get<User>(this.baseUrl+'/api/utente/get',{headers:header})
  }

  changeUser(token: string,usernameNew:string,passwordNew:string): Observable<string> {
    let parms=new HttpParams()
    .append("usernameNew",usernameNew)
    .append("passwordNew",passwordNew)
    let h = { Authorization: "Bearer " + token }
    return this.http.put<string>(this.baseUrl + '/api/utente/change', null, { headers: h, params: parms});
  }
  

  deleteUser(token: string): Observable<string> {
    let h = { Authorization: "Bearer " + token }
    return this.http.delete<string>(this.baseUrl + '/api/utente/delete', { headers: h});
  }
  
  newUser(username:string,password:string): Observable<string> {
    let parms=new HttpParams()
    .append("usernameNew",username)
    .append("passwordNew",password)
    return this.http.post<string>(this.baseUrl + "/api/utente/new", { params: parms});
  }

  getPassword(namePassword:string, token: string):Observable<GetPassword> {
    let header={ Authorization: "Bearer " + token }
    let parms=new HttpParams()
    .append("Name",namePassword);

    return this.http.get<GetPassword>(this.baseUrl + "/api/password/get", { params: parms, headers: header })
  }
  NewPassword(namePassword:string,password:string, token: string):Observable<string> {
    let header={ Authorization: "Bearer " + token }
    let parms=new HttpParams()
    .append("namePassword",namePassword)
    .append("password",password);
    return this.http.get<string>(this.baseUrl + "/api/password/new", { params: parms, headers: header })
  }

  
}
