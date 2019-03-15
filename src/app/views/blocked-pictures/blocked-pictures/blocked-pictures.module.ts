import { BlockedPicturesComponent } from './../blocked-pictures.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockedPicturesRoutingModule } from './blocked-pictures-routing.module';

@NgModule({
  declarations: [BlockedPicturesComponent],
  imports: [
    CommonModule,
    BlockedPicturesRoutingModule
  ]
})
export class BlockedPicturesModule { }
