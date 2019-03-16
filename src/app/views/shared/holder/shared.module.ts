import { MessagComponent } from './../messag/messag.component';
import { HolderComponent } from './holder.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandBComponent } from '../rand-b/rand-b.component';

@NgModule({
  declarations: [HolderComponent,RandBComponent,MessagComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HolderComponent,
    RandBComponent,
    MessagComponent,
  ]
})
export class SharedModule { }
