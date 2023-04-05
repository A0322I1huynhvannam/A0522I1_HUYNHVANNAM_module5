import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customer : Customer = {};
  id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private customerService:CustomerService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.customerService.finByIdCustomer(id).subscribe(data => {
          console.log(data);
          this.customer = data;
          this.deleteCustomer();
        });
      }
    }, error => {
    }, () => {
    });
  }
  ngOnInit(): void {
  }

  deleteCustomer() {
    Swal.fire({
      title: 'Are you sure want to remove?' + this.customer.customerName,
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.customerService.deleteCustomer(this.customer.id).subscribe(next => {

        });
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        this.route.navigateByUrl('/customer/list');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
        this.route.navigateByUrl('/customer/list');
      }
    })}


}
