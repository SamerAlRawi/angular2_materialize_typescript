import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  isLoading = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        new User('User 1', 'x@y.x'),
        new User('User 3', 'more@y.x'),
        new User('User 2', 'dsdsd@fde.com')
        ];
        this.isLoading = false;
    }, 2500);
  }

  delete(user: User): void {
    console.log(user);
  }
}


