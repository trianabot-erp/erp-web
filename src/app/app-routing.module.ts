import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkyzenproductsComponent } from './skyzenproducts/skyzenproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SettingComponent } from './setting/setting.component';
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
import { SkyzenpartsComponent } from './skyzenparts/skyzenparts.component';
import { AddpartsskyzenComponent } from './addpartsskyzen/addpartsskyzen.component';
import { ProductsComponent } from './products/products.component';
import { SidenavproductsComponent } from './sidenavproducts/sidenavproducts.component';
import { ProductbrandComponent } from './productbrand/productbrand.component';
import { ProductaddbrandComponent } from './productaddbrand/productaddbrand.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductaddcategoryComponent } from './productaddcategory/productaddcategory.component';
import { NewpasswordgenerateComponent } from './newpasswordgenerate/newpasswordgenerate.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ProductsubcategoryComponent } from './productsubcategory/productsubcategory.component';
import { ProductaddsubcategoryComponent } from './productaddsubcategory/productaddsubcategory.component';
import { ProductshsnComponent } from './productshsn/productshsn.component';
import { ProductsaddhsnComponent } from './productsaddhsn/productsaddhsn.component';




import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
{path:'sidenav',component:SidenavComponent},
  {path:'dashboard',component:DashboardComponent},
{path:'',component:LoginComponent},  
{path:'addproductskyzen',component:AddproductskyzenComponent},
{path:'addcategory',component:AddcategoryComponent},
{path:'category',component:CategoryComponent},
{path:'asp',component:AspComponent},
{path:'addasp',component:AddaspComponent},
{path:'setting',component:SettingComponent},
{path:'skyzenproducts',component:SkyzenproductsComponent},
{path:'crm',component:CrmComponent},
{path:'sidenavone',component:SidenavoneComponent},
{path:'raiseticket',component:RaiseticketComponent},
{path:'aspcrm',component:AspcrmComponent},
{path:'asptechnician',component:AsptechnicianComponent},
{path:'skyzenparts',component:SkyzenpartsComponent},
{path:'addpartsskyzen',component:AddpartsskyzenComponent},
{path:'products',component:ProductsComponent},
{path:'sidenavproducts',component:SidenavproductsComponent},
{path:'productbrand',component:ProductbrandComponent},
{path:'productaddbrand',component:ProductaddbrandComponent},
{path:'productcategory',component:ProductcategoryComponent},
{path:'productaddcategory',component:ProductaddcategoryComponent},
{path:'newpasswordgenerate',component:NewpasswordgenerateComponent},
{path:'adduser',component:AdduserComponent},
{path:'productsubcategory',component:ProductsubcategoryComponent},
{path:'productaddsubcategory',component:ProductaddsubcategoryComponent},
{path:'productshsn',component:ProductshsnComponent},
{path:'productsaddhsn',component:ProductsaddhsnComponent},
  {path:'**',component:PagenotfoundComponent} 
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
