import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../model/product';
import {Category} from '../../../model/category';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  categorys: Category[] = [];
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
    this.categoryService.getAllCategory().subscribe(data =>{
      this.categorys = data;
    }, error => {
      console.log('error get all category form update product')
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        this.productService.findById(parseInt(id)).subscribe(data => {
          console.log(data);
          this.product = data;
          this.productForm = new FormGroup({
            id: new FormControl(this.product.id),
            name: new FormControl(this.product.name),
            price: new FormControl(this.product.price),
            description: new FormControl(this.product.description),
            category: new FormControl(this.product.name,[Validators.required])
          });
        })
      }
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id, [Validators.required]),
      name: new FormControl(this.product.name, [Validators.required]),
      price: new FormControl(this.product.price, [Validators.required, , Validators.min(1000)]),
      description: new FormControl(this.product.description, [Validators.required]),
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.productForm.value.id, this.productForm.value).subscribe(next => {
      alert('Cập nhật thành công');
      this.router.navigate(['/product/list']);
    }, error => {
      console.log('update fail')
    }, () => {
    });

  }
}
