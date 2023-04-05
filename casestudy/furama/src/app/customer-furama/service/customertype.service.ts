import { Injectable } from '@angular/core';
import {CustomerType} from "../model/customer-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomertypeService {

  customerTypes: CustomerType[] = [];
  private URL_API_CUSTOMER_TYPE = "http://localhost:3000/customertypes/";

  constructor(private httpClient: HttpClient) {
  }
  getAllCustomerType(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(this.URL_API_CUSTOMER_TYPE);
  }
}
