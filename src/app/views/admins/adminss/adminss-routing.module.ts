import { AdminsComponent } from './../admins.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from '../messages/messages.component';

const routes: Routes = [
  {
  path:'',
  component :AdminsComponent,
  data:{
    title:'Admins',
  }
  },
  {
    path:'messages',
    component: MessagesComponent,
    data:{
      title:'Messages'
    }

  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminssRoutingModule { }
