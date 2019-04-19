import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPrandComponent } from './add-prand/add-prand.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent,
    data:{
      title:"Products"
    }
  },
  {
    path:'AddProduct',
    component:AddProductComponent,
    data:{
      title:"Add-Product"
    }
  },
  {
    path:'AddPrand',
    component:AddPrandComponent,
    data:{
      title:"Add-Prand"
    }
  },
  {
    path:'AddCategory',
    component:AddCategoryComponent,
    data:{
      title:"Add-Category"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
