import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../model/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login?:Login;
  userForm:FormGroup;


  constructor() {
    this.userForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),

    })
  }

  ngOnInit(): void {
  }

  LoginForm() {
      console.log(this.userForm);
      if(this.userForm){
        (this.userForm.value);
      }
    }
}
