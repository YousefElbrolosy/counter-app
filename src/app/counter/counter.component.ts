import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  //the count that is incremented
  users: User[] = [
    { name: "ahmed", age: 3, gender: "male", salary: 33 },
    { name: "Yousef", age: 3, gender: "male", salary: 33, hello:function(){
      return "hello";
    } },
    { name: "adham", age: 3, gender: "male", salary: 33 },
    { name: "soha", age: 21, gender: "female", salary: 33 }
  ]




  count: number = 0;
  //size of Count
  styleSize: string = "font-size:450px;"
  //increment function
  increment() {
    this.count = this.count + 1;
  }
  //decrement function
  decrement() {
    this.count = this.count - 1;
  }

  constructor() {

  }
}
