import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../model/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL = 'http://localhost:3000/products/';

  constructor(private httpClient: HttpClient) {
  }

  products: Product[] = [];

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  saveProduct(product: any): Observable<any> {
    return this.httpClient.post(this.API_URL, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + id);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.httpClient.put(this.API_URL + id, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(this.API_URL + id);
  }
}
