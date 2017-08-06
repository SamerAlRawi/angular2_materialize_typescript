import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../users/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() user = '';
  @Input() email = '';
  @Output() add: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {

  }

  addUser(): void {
    this.add.emit(new User(this.user, this.email, new Date()));
    this.user = '';
    this.email = '';
  }

  canAdd(): boolean {
    return this.user !== '' && this.email !== '';
  }
}
