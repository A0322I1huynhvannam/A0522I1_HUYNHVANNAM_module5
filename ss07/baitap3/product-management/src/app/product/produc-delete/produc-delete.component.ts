import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../../../model/product";
import {ModalModule} from 'ngb-modal';
import Swal from "sweetalert2/dist/sweetalert2.js";


@Component({
  selector: 'app-produc-delete',
  templateUrl: './produc-delete.component.html',
  styleUrls: ['./produc-delete.component.css']
})
export class ProducDeleteComponent implements OnInit {

  product: Product = {};
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.productService.findById(parseInt(id)).subscribe(data => {
          console.log(data);
          this.product = data;
          this.deleteProduct();
        });
      }
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  deleteProduct() {
    Swal.fire({
      title: 'Are you sure want to remove?' + this.product.name,
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.productService.deleteProduct(this.product.id).subscribe(next => {

        });
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        this.route.navigateByUrl('/product/list');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
        this.route.navigateByUrl('/product/list');
      }
    })
  }
}

