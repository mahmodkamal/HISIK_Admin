import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorsComponent } from './visitors/visitors.component';

const routes: Routes = [
  {
  path:'',
  component:AccountsComponent,
  data:{
    title:'Accounts',},

  }
  ,{
    path:'users',
    component:UsersComponent,
    data:{
      title:'Users',
    }
  },
  {
    path:"visitors",
    component:VisitorsComponent,
    data:{
      title:'Visitors',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
