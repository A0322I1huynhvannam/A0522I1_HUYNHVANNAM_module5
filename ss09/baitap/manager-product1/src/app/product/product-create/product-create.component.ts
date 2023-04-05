import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../model/category';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  categorys: Category[] = [];

  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router, private categoryService: CategoryService) {
    this.categoryService.getAllCategory().subscribe(next => {
        this.categorys = next;
      }, error => {
      },
      () => {
      });
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(1000)]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  }

  submitProduct() {
    console.log(this.productForm);
    if (!this.productForm.valid) {
    } else {
      this.productService.saveProduct(this.productForm.value).subscribe(next => {
          this.router.navigateByUrl('/product/list');
        }, error => {
          console.log('Error fail');
        },
        () => {
        });
    }
    
  }

}
