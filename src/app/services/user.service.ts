import { Injectable, signal, WritableSignal } from '@angular/core';
import { user } from './auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: WritableSignal<user | null | undefined> = signal(null);
  constructor() {}
  saveUser(user: user | undefined) {
    this.user?.set(user);
    localStorage.setItem('user', JSON.stringify(this.user()));
  }
  getUser() {
    if (localStorage.getItem('user')) {
      const currentUser = JSON.parse(localStorage.getItem('user')!);
      this.user?.set(currentUser);
    }
  }
  logout() {
    // localStorage.setItem('user', '');
    localStorage.clear();
  }
}
