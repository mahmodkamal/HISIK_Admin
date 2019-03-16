
import { AdminsComponent } from './../admins.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminssRoutingModule } from './adminss-routing.module';
import { MessagesComponent } from '../messages/messages.component';
import { SharedModule } from '../../shared/holder/shared.module';

@NgModule({
  declarations: [
    AdminsComponent,
    MessagesComponent,
    
  ],
  imports: [
    CommonModule,
    AdminssRoutingModule,
    SharedModule,
  ]
  ,exports:[
    
  ]
})
export class AdminssModule { }
