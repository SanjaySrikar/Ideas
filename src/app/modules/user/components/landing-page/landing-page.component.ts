import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import Ideas from 'src/app/mock-data/ideas';
import types from '../../../../mock-data/types';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  constructor(private router : Router) {

  }

  ngOnInit(): void {

  }
}
