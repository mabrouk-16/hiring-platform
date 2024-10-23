import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { country_list } from '../../../shared/countries_arr';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-register',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    MatListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  checked: boolean = false;

  today: Date = new Date();

  maxBirthDate: Date = new Date(
    this.today.getFullYear() - 13,
    this.today.getMonth(),
    this.today.getDate()
  );

  minBirthDate: Date = new Date(
    this.maxBirthDate.getFullYear() - 100,
    this.maxBirthDate.getMonth(),
    this.maxBirthDate.getDate()
  );

  passwordPattern: string = '^(?=.*?[a-zA-Z])(?=.*?[0-9!@#$&*~]).{8,}$';

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.passwordPattern),
    ]),
    confirm_password: new FormControl(null, [Validators.required]),
    dateOfBirth: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
  });

  datepickerAge: boolean = false;
  countries_list: any = [];
  privacyChecked: boolean = true;

  hide: any;

  constructor() {}

  ngOnInit(): void {
    this.countries_list = country_list;
  }

  onDateChange(event: any) {
    const currentDate: Date = new Date();

    const selectedDate: Date = event.value;
    const date13YearsAgo: Date = new Date(
      currentDate.getFullYear() - 13,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    this.datepickerAge = selectedDate > date13YearsAgo;
  }

  submitRegister() {
    // this.authService.loading.set(true);

    const tzId = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let registerFormValue = { ...this.registerForm.value, tzId };
    delete registerFormValue.confirm_password;
    // this.authService.registerNewUser(registerFormValue).subscribe({
    //   next: () => {
    //     this.authService.loading.set(false);
    //     this.storageService.setRegSource();
    //     this.dialogRef.close();
    //     this.translocoService
    //       .selectTranslate('auth.register.successMsg')
    //       .subscribe((translation) => {
    //         this._snackBar.success(translation, 5000);
    //       });
    //   },
    //   error: (response) => {
    //     console.log(response.error);
    //     this.authService.loading.set(false);
    //     this.translocoService
    //       .selectTranslate('auth.register.' + response.error.error)
    //       .subscribe((translation) => {
    //         this._snackBar.error(translation, 5000);
    //       });
    //   },
    // });
  }
}
