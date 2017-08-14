import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  getToken(): string {
    // this.http.request()
    return 'AAAAAAAAAAAAAAAA\'AAAAAA';
  }

}
