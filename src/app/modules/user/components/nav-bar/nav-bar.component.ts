import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @ViewChild('moonPath1') moonPath1: ElementRef;
  @ViewChild('moonPath2') moonPath2: ElementRef;
  @ViewChild('moonPath3') moonPath3: ElementRef;
  constructor(
    private _loginService: LoginService,
    private renderer: Renderer2
  ) {}
  // fillColor =  '#CCD83F';
  //if localstorage theme is dark then set fillColor to yellow else set it to white
  fillColor = localStorage.getItem('theme') === 'dark' ? '#CCD83F' : '#FFFFFF';
  isDarkMode: boolean;
  username : string ;
  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('userName'));
    console.log(this.username)
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    // this.renderer.setStyle(this.moonPath3.nativeElement, 'fill', this.fillColor);
  }

  logout() {
    this._loginService.logout();
  }

  toggleFillColor() {
    // this.fillColor = this.fillColor === '#CCD83F' ? '#FFFFFF' : '#CCD83F';

    if (this.fillColor == '#CCD83F') {
      this.fillColor = '#FFFFFF';
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

      localStorage.setItem('theme', 'light');

    }
    // if fillcolor is white then change it to yellow and set localstorage theme to dark
    else if (this.fillColor === '#FFFFFF') {
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
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
