import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  seconds: number = 11;
  subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
  }
  countDown(){
    const timer = interval(1000);
    this.subscription = timer.subscribe(() => {
      if (this.seconds > 0) {
        this.seconds--;
      }
    });
  }
  stop(){
    this.subscription.unsubscribe();
  }
  reset(){
    this.seconds = 11;
  }

}
