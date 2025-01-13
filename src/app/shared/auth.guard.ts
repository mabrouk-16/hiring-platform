import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../web-app/auth/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class authGuard {
  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  canActivate(): boolean {
    // const expectedRoles: string[] = route.data['expectedRoles'];
    if (!this.userService.user()?._id) {
       this.router.navigate(['/']).then(() => {
        const dialogRef = this.dialog.open(LoginComponent, {
          width: 'fit-content',
        });
      }); 
      return false;
    }
      return true;
  }
}
