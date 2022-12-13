import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
    private _loginService: LoginService,
    private renderer: Renderer2
  ) {}
  userForm: FormGroup;
  @ViewChild('moonPath1') moonPath1: ElementRef;
  @ViewChild('moonPath2') moonPath2: ElementRef;
  @ViewChild('moonPath3') moonPath3: ElementRef;
  userData: user;
  fillColor = '#CCD83F';
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
