import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.css']
})
export class LoadingAnimationComponent implements OnInit {
  @Input()isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
