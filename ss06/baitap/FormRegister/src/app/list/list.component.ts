import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users : User[] = [];

  constructor() {
    this.users.push({email:"nam@gmail.com", password:"12345", country:"Quang Nam",age:20,gender: true, phone:"0359517602"})
    this.users.push({email:"nam@gmail.com", password:"12345", country:"Viet Nam",age:20,gender: true, phone:"0359517602"})
    this.users.push({email:"nam@gmail.com", password:"12345", country:"Quang Nam",age:20,gender: true, phone:"0359517602"})
    this.users.push({email:"nam@gmail.com", password:"12345", country:"Quang Nam",age:20,gender: true, phone:"0359517602"})
  }

  ngOnInit(): void {
  }

}
