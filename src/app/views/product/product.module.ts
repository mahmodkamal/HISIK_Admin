import { AddProductComponent } from './add-product/add-product.component';
import { AddPrandComponent } from './add-prand/add-prand.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    AddCategoryComponent
    ,AddPrandComponent
    ,AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
  ]
  ,providers:[
    
  ]
})
export class ProductModule { }
