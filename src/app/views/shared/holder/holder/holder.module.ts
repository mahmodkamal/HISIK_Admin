import { HolderComponent } from './../holder.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolderRoutingModule } from './holder-routing.module';

@NgModule({
  declarations: [HolderComponent],
  imports: [
    CommonModule,
    HolderRoutingModule
  ]
})
export class HolderModule { }
