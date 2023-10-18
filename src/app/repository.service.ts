import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { url } from './app.module';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http:HttpClient) { }

 async getToken(p:HttpParams):Promise<string | null>{
      return new Promise<string>((result)=>{
        let subscribe= this.http.post<string>(url + '/login', null, {params:p})
        .subscribe(
          x=>{
            subscribe.unsubscribe()
            result(x.toString())
             }
          )
      })
  }
  async getUtente(token:string|null):Promise<any>{
    let h=new HttpHeaders({Authorization:"Bearer "+token})
    return new Promise<string>((result)=>{
      let subscribe= this.http.get<string>(url + '/api/utente/get', {headers:h})
      .subscribe(
        x=>{
          subscribe.unsubscribe()
          result(x)
           }
        )
    })
}
async changeUtente(p:HttpParams,token:string|null):Promise<any>{
  let h=new HttpHeaders({Authorization:"Bearer "+token})
  return new Promise<string>((result)=>{
    let subscribe= this.http.put<string>(url + '/api/utente/change',null, {headers:h,params:p})
    .subscribe(
      x=>{
        subscribe.unsubscribe()
        result(x)
         }
      )
  })
}
async deleteUtente(token:string|null):Promise<any>{
  let h=new HttpHeaders({Authorization:"Bearer "+token})
  return new Promise<string>((result)=>{
    let subscribe= this.http.delete<string>(url + '/api/utente/delete', {headers:h})
    .subscribe(
      x=>{
        subscribe.unsubscribe()
        result(x)
         }
      )
  })
}
  newUtente(p:HttpParams):Promise<string | null> {
    return new Promise<string|null>((result)=>{
      let subscribe= this.http.post<string>(url + "/api/utente/new", null, {params:p})
      .pipe(
         catchError((error) => {
            subscribe.unsubscribe();
            result(null);
            return error;
            }
         )
      )
      .subscribe(
        (x)=>{
          subscribe.unsubscribe()
              if (typeof x === 'string') {
                result(x);
              } else {
                result(null);
              }
           }
        )
    })
  }
  getPassword(p:HttpParams,token:string|null):Promise<any> {
    let h=new HttpHeaders({Authorization:"Bearer "+token})
    return new Promise((result)=>{
      let subscribe= this.http.get(url + "/api/password/get",{params:p,headers: h})
      .subscribe(
        x=>{
          subscribe.unsubscribe()
          result(x)
           }
        )
    })
  }
  AddPassword(p:HttpParams,token:string|null):Promise<any> {
    let h=new HttpHeaders({Authorization:"Bearer "+token})
    return new Promise((result)=>{
      let subscribe= this.http.post(url + "/api/password/new",null,{params:p,headers: h})
      .subscribe(
        x=>{
          subscribe.unsubscribe()
          result(x)
           }
        )
    })
  }
}
