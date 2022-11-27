import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router ) { }

  ngOnInit(): void {
  }

  backToLogin(){
    this.router.navigateByUrl('/login');
  }

  onRegister(){
    //validate user inputs
    // send data to db
    // upon success navigate back to login
    this.backToLogin();


  }

}
