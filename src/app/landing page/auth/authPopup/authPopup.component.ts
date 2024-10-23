import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-authPopup',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    LoginComponent,
    RegisterComponent
],
  templateUrl: './authPopup.component.html',
  styleUrls: ['./authPopup.component.css'],
})
export class AuthPopupComponent {
  constructor() {}
}
