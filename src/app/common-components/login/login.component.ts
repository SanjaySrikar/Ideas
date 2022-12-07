import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
    private _loginService: LoginService,
    private renderer: Renderer2
  ) {}
  @ViewChild('moonPath1') moonPath1: ElementRef;
  @ViewChild('moonPath2') moonPath2: ElementRef;
  @ViewChild('moonPath3') moonPath3: ElementRef;
  fillColor = '#CCD83F';
  userForm: FormGroup;
  submitted: boolean = false;
  user_id: number;
  userName: string;
  error: boolean = false;
  message: string = '';
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
          const role: string = this._loginService.getUserRole();
          if (role == 'ADMIN') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/user']);
          }
        },

        error: (err) => {
          this.error = true;
          this.message = 'INVALID CREDENTIALS';
          console.log(err);
        },
      });
    }
  }
  toggleFillColor() {
    // this.fillColor = this.fillColor === '#CCD83F' ? '#FFFFFF' : '#CCD83F';
    if (this.fillColor == '#CCD83F') {
      this.fillColor = '#000000';
      this.renderer.setStyle(
        this.moonPath3.nativeElement,
        'fill',
        this.fillColor
      );
      this.renderer.setStyle(
        this.moonPath1.nativeElement,
        'fill',
        this.fillColor
      );
      this.renderer.setStyle(
        this.moonPath2.nativeElement,
        'fill',
        this.fillColor
      );
      // check if the theme in localstorage is light
      // if it is then do nothing else set it to light
      if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
      }
    }
    // if fillcolor is white then change it to yellow and set localstorage theme to dark
    else if (this.fillColor === '#000000') {
      this.fillColor = '#CCD83F';
      this.renderer.setStyle(
        this.moonPath3.nativeElement,
        'fill',
        this.fillColor
      );
      this.renderer.setStyle(
        this.moonPath1.nativeElement,
        'fill',
        this.fillColor
      );
      this.renderer.setStyle(
        this.moonPath2.nativeElement,
        'fill',
        this.fillColor
      );

      localStorage.setItem('theme', 'dark');
    }
    if (
      localStorage.getItem('theme') === 'dark' ||
      !('theme' in localStorage)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
