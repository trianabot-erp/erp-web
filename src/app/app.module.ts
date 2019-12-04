import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SettingComponent } from './setting/setting.component';
import { HeaderoneComponent } from './headerone/headerone.component';
import { SkyzenproductsComponent } from './skyzenproducts/skyzenproducts.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddproductskyzenComponent } from './addproductskyzen/addproductskyzen.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AspComponent } from './asp/asp.component';
import { AddaspComponent } from './addasp/addasp.component';
import { CrmComponent } from './crm/crm.component';

import { SidenavoneComponent } from './sidenavone/sidenavone.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { AspcrmComponent } from './aspcrm/aspcrm.component';
import { AsptechnicianComponent } from './asptechnician/asptechnician.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    PagenotfoundComponent,
    SettingComponent,
    HeaderoneComponent,
    SkyzenproductsComponent,
    SidenavComponent,
    AddproductskyzenComponent,
    CategoryComponent,
    AddcategoryComponent,
    AspComponent,
    AddaspComponent,
    CrmComponent,
    SidenavoneComponent,
    RaiseticketComponent,
    AspcrmComponent,
    AsptechnicianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,MatDatepickerModule, MatInputModule,MatNativeDateModule,
    FormsModule, ReactiveFormsModule,BrowserAnimationsModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
