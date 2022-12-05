import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _loginService: LoginService
  ) {}
  userForm: FormGroup;
  userData: user;
  submitted: boolean = false;
  user_id: number;
  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: null,
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
        ],
      ],
    });
  }

  backToLogin() {
    this.router.navigateByUrl('/login');
  }

  onRegister() {
    //validate user inputs
    // send data to db
    // upon success navigate back to login
    this.submitted = true;
    if (this.userForm.valid) {
      this._loginService
        .register(this.userForm.value)
        .subscribe((data: user) => {
          this.user_id = data.id;
          this.backToLogin();
        });
    }
  }
}
