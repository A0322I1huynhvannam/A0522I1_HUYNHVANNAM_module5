import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css']
})
export class CreateAppComponent implements OnInit {

  user?:User;
  userForm : FormGroup;
  country: string[]=[];

  constructor() {
    this.userForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
      country : new FormControl('',[Validators.required]),
      age : new FormControl('',[Validators.required,Validators.min(18)]),
      gender : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required,Validators.pattern('/^\\\\+84\\\\d{9,10}$/')]),
    })
  }

  ngOnInit(): void {
  }
  confirmPassword(form: any){
    const password = form.controls.password.value;
    const passwordConfirm = form.controls.passwordConfirm;
    if (password === passwordConfirm){return null;}
    else {return {'invalidPasswordConfirm': true}};
  }

  addUserReactive() {
    console.log(this.userForm);
   if(this.userForm){
     this.country.push(this.userForm.value);
   }
  }
}
