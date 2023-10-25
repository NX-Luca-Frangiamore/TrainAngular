import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { DTOGetPassword } from '../DTOs/get-password';
import { DTOGetUser } from '../DTOs/get-user';
@Injectable({
  providedIn: 'root',
})
export class PasswordGenProxyService {
  private readonly baseUrl = 'https://localhost:7134';

  constructor(private readonly http: HttpClient) {}

  logIn$(username: string, password: string): Observable<string> {
    const h = new HttpParams()
      .append('username', username)
      .append('password', password);

    return this.http.post<string>(this.baseUrl + '/login', null, { params: h });
  }

  signIn$(username: string, password: string): Observable<string> {
    let parms = new HttpParams()
      .append('username', username)
      .append('password', password);
    return this.http.post<string>(this.baseUrl + '/api/utente/new', null, {
      params: parms,
    });
  }

  getUser$(token: string | null): Observable<DTOGetUser> {
    let header = { Authorization: 'Bearer ' + token };
    return this.http.get<DTOGetUser>(this.baseUrl + '/api/utente/get', {
      headers: header,
    });
  }

  putUser$(
    usernameNew: string,
    passwordNew: string,
    token: string,
  ): Observable<string> {
    let parms = new HttpParams()
      .append('usernameNew', usernameNew)
      .append('passwordNew', passwordNew);
    let h = { Authorization: 'Bearer ' + token };
    return this.http.put<string>(this.baseUrl + '/api/utente/change', null, {
      headers: h,
      params: parms,
    });
  }

  deleteUser$(token: string): Observable<string> {
    let h = { Authorization: 'Bearer ' + token };
    return this.http.delete<string>(this.baseUrl + '/api/utente/delete', {
      headers: h,
    });
  }

  getPassword$(
    namePassword: string,
    token: string,
  ): Observable<DTOGetPassword> {
    let header = { Authorization: 'Bearer ' + token };
    let parms = new HttpParams().append('namePassword', namePassword);

    return this.http.get<DTOGetPassword>(this.baseUrl + '/api/password/get', {
      params: parms,
      headers: header,
    });
  }
  postPassword$(
    namePassword: string,
    password: string,
    token: string,
  ): Observable<string> {
    let header = { Authorization: 'Bearer ' + token };
    let parms = new HttpParams()
      .append('namePassword', namePassword)
      .append('password', password);
    return this.http.post<string>(this.baseUrl + '/api/password/new', null, {
      params: parms,
      headers: header,
    });
  }
  deletePassword$(namePassword: string, token: string): Observable<string> {
    let h = { Authorization: 'Bearer ' + token };
    let parms = new HttpParams().append('namePassword', namePassword);
    return this.http.delete<string>(this.baseUrl + '/api/password/delete', {
      headers: h,
      params: parms,
    });
  }
}
