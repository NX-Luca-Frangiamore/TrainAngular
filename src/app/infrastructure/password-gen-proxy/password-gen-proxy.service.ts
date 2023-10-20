import { HttpClient, HttpHeaders, HttpParams , HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { DTOGetPassword } from '../DTOs/get-password';
import { DTOGetUser } from '../DTOs/get-user';
@Injectable({
  providedIn: 'root'
})
export class PasswordGenProxyService {

  private readonly baseUrl = 'https://localhost:7134'

  constructor(private readonly http: HttpClient) { }

  logIn$(username: string, password: string): Observable<string> {
    let h=new HttpParams()
    .append("username",username)
    .append("password",password)

    return this.http.post<string>(this.baseUrl + '/login', null,{params:h}).pipe(
          catchError((e)=>{
            alert(e["error"])
            return ""
          })
    )
  }
  signIn$(username:string,password:string): Observable<string> {
    let parms=new HttpParams()
    .append("username",username)
    .append("password",password)
    return this.http.post<string>(this.baseUrl + "/api/utente/new",null, { params: parms}).pipe(
      catchError((e)=>{
        alert(e["error"])
        return ""
      })
) 
  }
  getUser$(token: string | null):Observable<DTOGetUser>{
    let header={ Authorization: "Bearer " + token }
    return this.http.get<DTOGetUser>(this.baseUrl+'/api/utente/get',{headers:header}).pipe(
     
      catchError((e)=>{
        alert(e["error"])
        return of()
      })
   )
  }

  putUser$(usernameNew:string,passwordNew:string,token: string): Observable<string> {
    let parms=new HttpParams()
    .append("usernameNew",usernameNew)
    .append("passwordNew",passwordNew)
    let h = { Authorization: "Bearer " + token }
    return this.http.put<string>(this.baseUrl + '/api/utente/change', null, { headers: h, params: parms}).pipe(
      catchError((e)=>{
        alert(e["error"])
        return ""
      })
)
  }
  

  deleteUser$(token: string): Observable<string> {
    let h = { Authorization: "Bearer " + token }
    return this.http.delete<string>(this.baseUrl + '/api/utente/delete', { headers: h}).pipe(
      catchError((e)=>{
        alert(e["error"])
        return ""
      })
)
  }
  


  getPassword(namePassword:string, token: string):Observable<DTOGetPassword> {
    let header={ Authorization: "Bearer " + token }
    let parms=new HttpParams()
    .append("namePassword",namePassword);

    return this.http.get<DTOGetPassword>(this.baseUrl + "/api/password/get", { params: parms, headers: header }).pipe(
          catchError((e)=>{
            alert(e["error"])
            return of();
          })
    )
  }
  postPassword(namePassword:string,password:string, token: string):Observable<string> {
    let header={ Authorization: "Bearer " + token }
    let parms=new HttpParams()
    .append("namePassword",namePassword)
    .append("password",password);
    return this.http.post<string>(this.baseUrl + "/api/password/new",null, { params: parms, headers: header }).pipe(
      catchError((e)=>{
        alert(e["error"])
        return ""
      })
      )
    }
  
}
