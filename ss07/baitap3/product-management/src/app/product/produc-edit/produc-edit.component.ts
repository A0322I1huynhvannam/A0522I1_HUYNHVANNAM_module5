import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-produc-edit',
  templateUrl: './produc-edit.component.html',
  styleUrls: ['./produc-edit.component.css']
})
export class ProducEditComponent implements OnInit {
  productForm: FormGroup;
  product : Product;
  id: number;


  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router:Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
    if (id != null) {
      this.productService.findById(parseInt(id)).subscribe(data => {
        console.log(data);
        this.product = data;
        this.productForm = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name),
          price: new FormControl(this.product.price),
          description: new FormControl(this.product.description),
        });
      })
    }
  }, error => {
}, () => {
});
  }

  ngOnInit() {
  }



  updateProduct() {
    this.productService.updateProduct(this.productForm.value.id, this.productForm.value).subscribe(next => {
      alert('Cập nhật thành công');
      this.router.navigate(['/product/list']);
    }, error => {
      console.log("update fail")
    }, () => {
    });

  }

}
