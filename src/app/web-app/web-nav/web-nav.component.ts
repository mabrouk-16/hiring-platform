import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { WebRegisterComponent } from '../auth/web-register/web-register.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './web-nav.component.html',
  styleUrls: ['./web-nav.component.css'],
})
export class WebNavComponent {
  showLoginPopup = false;
  constructor(public dialog: MatDialog) {}
  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: 'fit-content',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
      }
    });
  }
  register() {
    const dialogRef = this.dialog.open(WebRegisterComponent, {
      width: 'fit-content',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
      }
    });
  }

  toggleMenu() {
    let profileMenu = document.getElementById('profileMenu');
    profileMenu?.classList.toggle('open-menu');
  }
}
