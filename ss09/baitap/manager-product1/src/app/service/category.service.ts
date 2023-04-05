import { Injectable } from '@angular/core';
import {Category} from '../../model/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL = 'http://localhost:3000/categorys/';
  categorys: Category[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_URL);
  }
}
