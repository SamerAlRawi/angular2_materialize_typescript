import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name: '';
  email: '';
  message: '';

  constructor() { }

  ngOnInit() {
  }

  send(): void {
    console.log(this.name);
  }
}
