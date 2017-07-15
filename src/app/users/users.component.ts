import { Component, NgModule, OnInit, Input } from '@angular/core';
import { User } from './user';
import { UsersServiceBase } from './users.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  isLoading = true;
  private usersService: UsersServiceBase;

  constructor(usersService: UsersServiceBase) {
    this.usersService = usersService;
  }

  ngOnInit() {
    this.usersService.getUsers().then(_ => {
      this.users = _;
      this.isLoading = false;
    });
  }

  delete(user: User): void {
    this.users = this.users.filter((item) => item !== user);
  }

  edit(user: User): void {
    user.editing = true;
  }

  save(user: User): void {
    user.editing = false;
  }

  add(user: User): void {
    this.users.push(user);
  }

  addNew(): void {
    const user = new User('', '');
    user.editing = true;
    this.users.push(user);
  }
}
