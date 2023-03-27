import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProducDeleteComponent} from "./product/produc-delete/produc-delete.component";
import {ProducEditComponent} from "./product/produc-edit/produc-edit.component";


const routes: Routes = [{
  path:'product/list',
  component:ProductListComponent,
},{
  path:'product/create',
  component:ProductCreateComponent,
},{
  path:'product/delete/:id',
  component:ProducDeleteComponent,
},{
  path:'product/edit/:id',
  component:ProducEditComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
