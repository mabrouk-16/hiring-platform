import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { from, Observable } from 'rxjs';
import { logBody, loginRes, regBody, regResponse, User } from './auth';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  user,
  signOut,
} from '@angular/fire/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  url = 'http://localhost:5000/auth/';
  private http = inject(HttpClient);
  private angularAuth = inject(Auth);
  private userService = inject(UserService);
  user$ = user(this.angularAuth);
  currentUser: WritableSignal<User | null | undefined> = signal(undefined);

  constructor() {}

  register(body: regBody): Observable<regResponse> {
    return this.http.post(`${this.url}signup`, body);
  }
  login(body: logBody): Observable<loginRes> {
    return this.http.post(`${this.url}login`, body);
  }
  registerWithFB(body: regBody): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.angularAuth,
      body.email,
      body.password
    ).then((res) =>
      updateProfile(res.user, {
        displayName: body.firstName + ' ' + body.lastName,
      })
    );
    return from(promise);
  }
  loginWithFB(body: logBody): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.angularAuth,
      body.email,
      body.password
    ).then((response) => console.log(response));
    return from(promise);
  }
  logout(): Observable<void> {
    const promise = signOut(this.angularAuth);
    return from(promise);
  }
}
