import { NotficationService } from './services/notfication/notfication.service';
import { HttpServiceService } from './services/Http/http-service.service';
import { AdminServiceService } from './services/Admin/admin-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HttpClientModule } from '@angular/common/http';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,

  
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AccountsComponent } from './views/accounts/accounts.component';
import { AdminsComponent } from './views/admins/admins.component';
import { ReportsComponent } from './views/reports/reports.component';
import { BlockedPicturesComponent } from './views/blocked-pictures/blocked-pictures.component';
import { MessagesComponent } from './views/admins/messages/messages.component';
import { ProductComponent } from './views/product/product.component';
import { AddProductComponent } from './views/product/add-product/add-product.component';
import { AddPrandComponent } from './views/product/add-prand/add-prand.component';
import { AddCategoryComponent } from './views/product/add-category/add-category.component';
import * as firebase from 'firebase/app';
import { FormsModule }   from '@angular/forms';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';

var config = {
  production: false,
  apiKey: "AIzaSyBYThMrbjOwXLTksqVd2zWKmwH86nfbydg",
  authDomain: "ionic-763e1.firebaseapp.com",
  databaseURL: "https://ionic-763e1.firebaseio.com",
  projectId: "ionic-763e1",
  storageBucket: "ionic-763e1.appspot.com",
  messagingSenderId: "543642243705"
};
// "reponame" HISIK_Admin
// ng build --prod --base-href https://mahmodkamal.github.io/HISIK_Admin/ 
// ngh -no-silent
firebase.initializeApp(config);
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(config),
   
   

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,

    

   

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    
  } ,HttpServiceService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
