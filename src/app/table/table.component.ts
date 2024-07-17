import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users: User[] = [
    { name: "ahmed", age: 3, gender: "male", salary: 33 },
    { name: "Yousef", age: 3, gender: "male", salary: 33, hello:function(){
      return "hello";
    } },
    { name: "adham", age: 3, gender: "male", salary: 33 },
    { name: "soha", age: 21, gender: "female", salary: 33 }
  ]
}
