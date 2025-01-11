import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class authGuard {
  constructor(private userService: UserService, 
    private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles: string[] = route.data['expectedRoles'];
    if (!this.userService.user()?._id) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
