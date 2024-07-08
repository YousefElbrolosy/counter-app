import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  //the count that is incremented
  count:number = 0;
  //size of Count
  styleSize:string = "font-size:450px;"
  //increment function
  increment(){
    this.count = this.count+1;
  }
  //decrement function
  decrement(){
    this.count = this.count-1;
  }

  constructor(){

  }
}
