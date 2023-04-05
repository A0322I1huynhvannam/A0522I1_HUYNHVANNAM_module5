import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderAdminComponent } from './layout/header-admin/header-admin.component';
import { CreateCustomerComponent } from './customer-furama/component-customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer-furama/component-customer/update-customer/update-customer.component';
import { ListCustomerComponent } from './customer-furama/component-customer/list-customer/list-customer.component';
import { DeleteCustomerComponent } from './customer-furama/component-customer/delete-customer/delete-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderAdminComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
