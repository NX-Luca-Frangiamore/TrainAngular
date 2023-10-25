import { Injectable } from '@angular/core';

export interface ITokenService {
  setToken(token: string): void;
  getToken(token: string): string | null;
}
@Injectable({
  providedIn: 'root',
})
export class ManageTokenService implements ITokenService {
  constructor() {}
  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token') ?? '';
  }
}
