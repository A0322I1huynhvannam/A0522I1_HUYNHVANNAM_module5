import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {CustomerType} from "../../model/customer-type";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomertypeService} from "../../service/customertype.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer : Customer;
  customertypes: CustomerType[] = [];
  constructor(private customerService : CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private customertypeService : CustomertypeService,
              ) {
    this.customertypeService.getAllCustomerType().subscribe(data =>{
      this.customertypes = data;
    },error => {
      console.log("error get all category form update product")
    })
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.customerService.finByIdCustomer(id).subscribe(data => {
          console.log(data);
          this.customer = data;
          this.customerForm = new FormGroup({
            id: new FormControl(this.customer.id, [Validators.required]),
            customerName: new FormControl(this.customer.customerName, [Validators.required, Validators.minLength(3)]),
            birthday: new FormControl(this.customer.birthday, [Validators.required]),
            gender: new FormControl(this.customer.gender, [Validators.required]),
            idCard: new FormControl(this.customer.idCard, [Validators.required]),
            phone: new FormControl(this.customer.phone, [Validators.required]),
            email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
            customerType: new FormControl(this.customer.customerType, [Validators.required]),
          })
        })
      }
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(this.customer.id, [Validators.required]),
      customerName: new FormControl(this.customer.customerName, [Validators.required, Validators.minLength(3)]),
      birthday: new FormControl(this.customer.birthday, [Validators.required]),
      gender: new FormControl(this.customer.gender, [Validators.required]),
      idCard: new FormControl(this.customer.idCard, [Validators.required]),
      phone: new FormControl(this.customer.phone, [Validators.required]),
      email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
      customerType: new FormControl(this.customer.customerType, [Validators.required]),
    })
  }

  compare(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customerForm.value.id, this.customerForm.value).subscribe(next => {
      alert('Cập nhật thành công');
      this.router.navigate(['/customer/list']);
    }, error => {
      console.log("update fail");
    }, () => {
    });

  }


}
