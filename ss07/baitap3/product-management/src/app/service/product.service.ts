import { Injectable } from '@angular/core';
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  private API_URL = "http://localhost:3000/products/"
  constructor(private httpClient : HttpClient) {
  }

  getAll() : Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }

  saveProduct(product) {
    return this.httpClient.post("http://localhost:3000/products",product);
  }
  findById(id: number):Observable<any> {
    return this.httpClient.get<any>(this.API_URL+ id);
  }

  updateProduct(id: number, product: any): Observable<any>{
   return this.httpClient.put("http://localhost:3000/products/" + id, product);
  }

  deleteProduct(id: number):Observable<any> {
   return this.httpClient.delete("http://localhost:3000/products/" + id);
    }

}
