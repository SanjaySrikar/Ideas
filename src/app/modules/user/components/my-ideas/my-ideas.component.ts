import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-my-ideas',
  templateUrl: './my-ideas.component.html',
  styleUrls: ['./my-ideas.component.css'],
})
export class MyIdeasComponent implements OnInit {
  name : string;
  constructor(private router: ActivatedRoute , private _loginService: LoginService) {
    //
    // this.editMode = this.router.snapshot.data['editMode'];
    this.name = this._loginService.getUserName();
  }
  ngOnInit(): void {}
}
