import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {CustomertypeService} from "../../service/customertype.service";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customertypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private fb: FormBuilder,
              private router: Router,
              private customertypeService: CustomertypeService) {
    this.customertypeService.getAllCustomerType().subscribe(next => {
        this.customertypes = next;
      }, error => {

      }, () => {
      }
    )
  }


  ngOnInit(): void {
    this.customerForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl('', [Validators.required]),
    })
  }

  submitCustomer() {
    console.log(this.customerForm);
    if(this.customerForm.valid){
      this.customerService.addNewCustomer(this.customerForm.value).subscribe(next => {
          console.log(next)
          this.router.navigateByUrl("/customer/list");
        }, error => {
          console.log("Error fail")
        },
        () => {
        });
    } else {

    }
  }
}
