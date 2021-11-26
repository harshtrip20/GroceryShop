import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddadminComponent } from './Component/Admin/addadmin/addadmin.component';
import { AllAdminComponent } from './Component/Admin/alladmin.component';
import { GetadminbyidComponent } from './Component/Admin/getadminbyid/getadminbyid.component';
import { UpdateadminComponent } from './Component/Admin/updateadmin/updateadmin.component';
// import { AddbillComponent } from './Component/bill/addbill/addbill.component';
// import { ViewbillComponent } from './Component/bill/viewbill/viewbill.component';
import { CartComponent } from './Component/cart/cart.component';
import { AddCustomerComponent } from './Component/Customer/addcustomer/addcustomer.component';
import { AllcustomerComponent } from './Component/Customer/allcustomer/allcustomer.component';
import { GetcustomerbyidComponent } from './Component/Customer/getcustomerbyid/getcustomerbyid.component';
import { UpdatecustomerComponent } from './Component/Customer/updatecustomer/updatecustomer.component';
import { Error404Component } from './Component/error404/error404.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
// import { AddOrderComponent } from './Component/Order/add-order/add-order.component';
// import { OrderListComponent } from './Component/Order/order-list/order-list.component';
import { AddProductComponent } from './Component/Product/add-product/add-product.component';
import { GetProductByIdComponent } from './Component/Product/get-product-by-id/get-product-by-id.component';
import { ProductListComponent } from './Component/Product/product-list/product-list.component';
import { UpdateProductComponent } from './Component/Product/update-product/update-product.component';
import { UserSignupComponent } from './Component/user-signup/user-signup.component';
import { UserAuthGuardService } from './Services/user-auth-guard.service';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  // {path:"order",component:OrderListComponent},
  {path:"allProducts",component:ProductListComponent},
  // {path:"orderDetails/:productId",component:OrderListComponent},
  {path:"productById/:productId",component:GetProductByIdComponent},
  {path:"product",component:AddProductComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  {path:"user-signUp",component:UserSignupComponent},
  {path:"updateProduct/:productId",component:UpdateProductComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  // {path:"order",component:AddOrderComponent},
  {path:"addadmin",component:AddadminComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  {path:"updateadmin/:adminId",component:UpdateadminComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  {path:"getadmin/:adminId",component:GetadminbyidComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  {path:"alladmins",component:AllAdminComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  {path:"allCustomer",component:AllcustomerComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  {path:"getCustomer/:customerId",component:GetcustomerbyidComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  {path:"updatecustomer/:customerId",component:UpdatecustomerComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  {path:"customer",component:AddCustomerComponent,canActivate:[UserAuthGuardService],data:{role:'Admin'}},
  // {path:"add-bill",component:AddbillComponent,canActivate:[UserAuthGuardService],data:{role:'Customer'}},
  // {path:"view-bill",component:ViewbillComponent,canActivate:[UserAuthGuardService],data:{role:'Customer'}},
  {path:"cart",component:CartComponent,canActivate:[UserAuthGuardService],data:{role:'Customer'}},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
