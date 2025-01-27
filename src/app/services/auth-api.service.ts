import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { from, Observable } from 'rxjs';
import { logBody, regBody, User } from './auth';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  user,
  signOut,
  authState,
} from '@angular/fire/auth';
import { UserService } from './user.service';
import { SnackbarService } from '../shared/snack.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  url = 'http://localhost:5000/auth/';
  private angularAuth = inject(Auth);
  private userService = inject(UserService);
  private snack = inject(SnackbarService);

  user$ = user(this.angularAuth);
  currentUser$ = authState(this.angularAuth);
  // currentUser: WritableSignal<User | null | undefined> = signal(undefined);

  constructor() {}

  // register(body: regBody): Observable<regResponse> {
  //   return this.http.post(`${this.url}signup`, body);
  // }
  // login(body: logBody): Observable<loginRes> {
  //   return this.http.post(`${this.url}login`, body);
  // }
  registerWithFB(body: regBody): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.angularAuth,
      body.email,
      body.password
    ).then((res) => {
      this.userService
        .addUserProfile(res.user.uid, {
          userId: res.user.uid,
          userName: body.firstName + '' + body.lastName || '',
          email: res.user.email || '',
          emailVerified: res.user.emailVerified || false,
          picture: '',
          cover: '',
          bio: '',
          posts: [],
          birthDate: '',
          phone: '',
          address: '',
        })
        .subscribe({
          next: () => {
            this.loginWithFB({ email: body.email, password: body.password });
            this.snack.success('User Successfully Registered');
          },
          error: (error) => {
            this.snack.error(error.message);
          },
        });
    });
    return from(promise);
  }
  loginWithFB(body: logBody): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.angularAuth,
      body.email,
      body.password
    ).then((response) => this.snack.success('User Successfully LoggedIn'));
    return from(promise);
  }
  logout(): Observable<void> {
    const promise = signOut(this.angularAuth);
    return from(promise);
  }
}
