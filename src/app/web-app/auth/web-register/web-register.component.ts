import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { AuthApiService } from '../../../services/auth-api.service';

@Component({
  selector: 'app-web-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './web-register.component.html',
  styleUrls: ['./web-register.component.css'],
})
export class WebRegisterComponent implements OnInit {
  passwordPattern: string = '^(?=.*?[a-zA-Z])(?=.*?[0-9!@#$&*~]).{8,}$';

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.passwordPattern),
    ]),
    cPassword: new FormControl(null),
  });

  constructor(private auth: AuthApiService, public userService: UserService) {}

  ngOnInit() {}
  submitRegister() {
    this.registerForm
      .get('cPassword')
      ?.setValue(this.registerForm.get('password')?.value);
    console.log(this.registerForm.value);
    this.auth.register(this.registerForm.value).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
        } else {
          alert(res.msgError);
        }
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
