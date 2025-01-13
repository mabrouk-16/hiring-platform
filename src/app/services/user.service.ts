import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { User } from './auth';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private angularAuth = inject(Auth);
  
  user: WritableSignal<User | null | undefined> = signal(null);
  constructor() {}
  saveUser(user: User | undefined) {
    this.user?.set(user);
    localStorage.setItem('user', JSON.stringify(this.user()));
  }
  getUser() {
    if (localStorage.getItem('user')) {
      const currentUser = JSON.parse(localStorage.getItem('user')!);
      this.user?.set(currentUser);
    }
  }

}
