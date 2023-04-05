import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {


  customers : Customer[]=[];

  constructor(private productService : CustomerService) {
    this.productService.getAllCustomer().subscribe(next =>{
      console.log(next)
      this.customers = next;
    });
  }

  ngOnInit(): void {
  }


}
