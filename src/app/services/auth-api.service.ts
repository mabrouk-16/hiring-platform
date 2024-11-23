import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { logBody, loginRes, regBody, regResponse } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  url = 'http://localhost:5000/auth/';
  constructor(private http: HttpClient) {}

  register(body: regBody): Observable<regResponse> {
    return this.http.post(`${this.url}signup`, body);
  }
  login(body: logBody): Observable<loginRes> {
    return this.http.post(`${this.url}login`, body);
  }
  // logout(): Observable<loginRes> {
  //   return this.http.post(`${this.url}logout`);
  // }
}
