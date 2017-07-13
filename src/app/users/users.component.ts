import { Component, NgModule, OnInit, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  isLoading = true;
  @Input() user: string = null;
  @Input() email: string = null;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        new User('User 1', 'x@y.x'),
        new User('User 3', 'more@y.x'),
        new User('User 4', 'emsil@yx.com'),
        new User('User 2', 'dsdsd@fde.com')
        ];
        this.isLoading = false;
    }, 2500);
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

  add(): void {
    const user = new User(this.user, this.email);
    console.log(user);
    this.users.push(user);
    this.user = '';
    this.email = '';
  }
  canAdd(): boolean {
    return this.user !== '' && this.email !== '';
  }
}
