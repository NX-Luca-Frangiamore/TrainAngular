import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogInRequestDto } from '../DTOs/log-in-request.dto';
import { Observable } from 'rxjs';

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


  async getUtente(token: string | null): Promise<any> {
    let h = new HttpHeaders({ Authorization: "Bearer " + token })
    return new Promise<string>((result) => {
      let subscribe = this.http.get<string>(url + '/api/utente/get', { headers: h })
        .subscribe(
          x => {
            subscribe.unsubscribe()
            result(x)
          }
        )
    })
  }
  async changeUtente(p: HttpParams, token: string | null): Promise<any> {
    let h = new HttpHeaders({ Authorization: "Bearer " + token })
    return new Promise<string>((result) => {
      let subscribe = this.http.put<string>(url + '/api/utente/change', null, { headers: h, params: p })
        .subscribe(
          x => {
            subscribe.unsubscribe()
            result(x)
          }
        )
    })
  }
  async deleteUtente(token: string | null): Promise<any> {
    let h = new HttpHeaders({ Authorization: "Bearer " + token })
    return new Promise<string>((result) => {
      let subscribe = this.http.delete<string>(url + '/api/utente/delete', { headers: h })
        .subscribe(
          x => {
            subscribe.unsubscribe()
            result(x)
          }
        )
    })
  }
  newUtente(p: HttpParams): Promise<string | null> {
    return new Promise<string | null>((result) => {
      let subscribe = this.http.post<string>(url + "/api/utente/new", null, { params: p })
        .pipe(
          catchError((error) => {
            subscribe.unsubscribe();
            result(null);
            return error;
          }
          )
        )
        .subscribe(
          (x) => {
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
  getPassword(p: HttpParams, token: string | null): Promise<any> {
    let h = new HttpHeaders({ Authorization: "Bearer " + token })
    return new Promise((result) => {
      let subscribe = this.http.get(url + "/api/password/get", { params: p, headers: h })
        .subscribe(
          x => {
            subscribe.unsubscribe()
            result(x)
          }
        )
    })
  }
  AddPassword(p: HttpParams, token: string | null): Promise<any> {
    let h = new HttpHeaders({ Authorization: "Bearer " + token })
    return new Promise((result) => {
      let subscribe = this.http.post(url + "/api/password/new", null, { params: p, headers: h })
        .subscribe(
          x => {
            subscribe.unsubscribe()
            result(x)
          }
        )
    })
  }
}
