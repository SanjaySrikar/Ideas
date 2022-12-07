import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css'],
})
export class AdminNavBarComponent implements OnInit {
  constructor(
    private _loginService: LoginService,
    private renderer: Renderer2
  ) {}
  @ViewChild('moonPath1') moonPath1: ElementRef;
  @ViewChild('moonPath2') moonPath2: ElementRef;
  @ViewChild('moonPath3') moonPath3: ElementRef;
  fillColor = '#CCD83F';
  ngOnInit(): void {}
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
      if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
      }
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
      !('theme' in localStorage)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  logout() {
    this._loginService.logout();
  }
}
