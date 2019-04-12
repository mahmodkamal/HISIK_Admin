import { UserServiceService } from './../../services/users/user-service.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { UsersComponent } from './users/users.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { SharedModule } from '../shared/holder/shared.module';

@NgModule({
  declarations: [AccountsComponent, UsersComponent, VisitorsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
  ],
  providers:[
    UserServiceService
  ]

})
export class AccountsModule { }
