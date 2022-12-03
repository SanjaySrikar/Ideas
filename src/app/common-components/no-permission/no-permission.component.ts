import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-permission',
  templateUrl: './no-permission.component.html',
  styleUrls: ['./no-permission.component.css'],
})
export class NoPermissionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    alert('No Admin Privileges. Redirecting in 10s');
    setTimeout(() => {
      this.router.navigateByUrl('/user');
    }, 10000);
  }
}
