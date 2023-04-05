import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./customer-furama/component-customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer-furama/component-customer/create-customer/create-customer.component";
import {DeleteCustomerComponent} from "./customer-furama/component-customer/delete-customer/delete-customer.component";
import {UpdateCustomerComponent} from "./customer-furama/component-customer/update-customer/update-customer.component";
import {HeaderAdminComponent} from "./layout/header-admin/header-admin.component";


const routes: Routes = [{
  path: 'header-admin',
  component : HeaderAdminComponent,
},
  {
    path: 'customer/list',
    component: ListCustomerComponent
  },
  {
    path: 'customer/create',
    component: CreateCustomerComponent
  },
  {
    path: 'customer/delete/:id',
    component: DeleteCustomerComponent
  },
  {
    path: 'customer/update/:id',
    component: UpdateCustomerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
