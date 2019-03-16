import { BlockedPicturesComponent } from './../blocked-pictures.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockedPicturesRoutingModule } from './blocked-pictures-routing.module';
import { SharedModule } from '../../shared/holder/shared.module';

@NgModule({
  declarations: [BlockedPicturesComponent],
  imports: [
    CommonModule,
    BlockedPicturesRoutingModule,
    SharedModule,
  ]
})
export class BlockedPicturesModule { }
