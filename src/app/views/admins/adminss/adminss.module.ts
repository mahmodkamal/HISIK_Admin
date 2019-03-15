import { AdminsComponent } from './../admins.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminssRoutingModule } from './adminss-routing.module';

@NgModule({
  declarations: [AdminsComponent],
  imports: [
    CommonModule,
    AdminssRoutingModule
  ]
})
export class AdminssModule { }
