import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthApiService } from '../../../services/auth-api.service';
import { loginRes } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthApiService,
    private router: Router,
    public userService: UserService
  ) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });
  ngOnInit() {}
  login() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe({
      next: (res: loginRes) => {
        if (res.success) {
          alert(res.message);
          this.router.navigate(['/home']);
          this.userService.saveUser(res.user);
        } else {
          alert(res.message);
        }
      },
    });
  }
}
