import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  constructor(private router : Router) {

  }

  ngOnInit(): void {
    if(localStorage.getItem('userRole') === "ADMIN"){
      console.log("heloo")
      this.router.navigate(['/admin']);
    }else{
      console.log(localStorage.getItem('userRole'))
    }
  }
}
