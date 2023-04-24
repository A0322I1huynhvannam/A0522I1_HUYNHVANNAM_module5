import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
   p = 2;
  mess:string;

  customers : Customer[]=[];
  Search: FormGroup = new FormGroup({name:new FormControl()});

  constructor(private customerService : CustomerService) {
    this.customerService.getAllCustomer().subscribe(next =>{
      console.log(next)
      this.customers = next;
    });
  }

  ngOnInit(): void {
  }


    submit() {
      if (this.Search.valid) {
        if (this.Search.value.name == null) {
          return this.customers
        } else {
          this.customerService.findByName(this.Search.value.name).subscribe(next => {
            if (next.length != 0) {
              this.customers = next;
              this.mess = null;
            } else {
              this.mess = "Not found by " + this.Search.value.name;
              this.customers = []
            }
          })
        }
        // this.customerService.findByName(this.Search.value.name).subscribe(next=> {
        //   console.log("search ")
        //   console.log(next)
        //   this.customers = next;
        // })
      }
    }


}
