import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-ideas',
  templateUrl: './my-ideas.component.html',
  styleUrls: ['./my-ideas.component.css'],
})
export class MyIdeasComponent implements OnInit {
  editMode: boolean;
  constructor(private router: ActivatedRoute) {
    //
    this.editMode = this.router.snapshot.data['editMode'];

  }
  ngOnInit(): void {}
}
