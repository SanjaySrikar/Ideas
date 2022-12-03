import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _loginService: LoginService
  ) {}

  userForm: FormGroup;
  submitted: boolean = false;
  user_id: number;
  userName : string;
  error: boolean = false;
  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    // upon validation
    this.submitted = true;
    if (this.submitted && this.userForm.valid) {
      this._loginService.login(this.userForm.value).subscribe({
        next: (value: user) => {
          this.user_id = value.id;
          this.userName = value.username;
          localStorage.setItem('user_id', JSON.stringify(this.user_id));
          localStorage.setItem('userName', JSON.stringify(this.userName));
          this._loginService.getUserRole()
          this.router.navigateByUrl('user');
        },

        error(err) {
          this.error = true;
          console.log(err);
        },
      });

      // this._loginService.login(this.userForm.value).subscribe(
      //   (data:number) => {
      //     this.user_id = data;
      //     this.router.navigateByUrl('user');
      //   },
      //   (error:any) =>{
      //     console.log(error);
      //   }
      // )
    }
  }
}
