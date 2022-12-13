import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private _userService: UserService) {}
  users: user[] = [];
  ngOnInit(): void {
    this.getUsers();
    // after window scroll to 1/3 of the page, make app-users-list sticky

  }
  getUsers() {
    this._userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
