import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { AddProductComponent } from './Component/Product/add-product/add-product.component';
import { ProductListComponent } from './Component/Product/product-list/product-list.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
// import { AddOrderComponent } from './Component/Order/add-order/add-order.component';
// import { OrderListComponent } from './Component/Order/order-list/order-list.component';
import { AddressComponent } from './Component/address/address.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './Component/Product/update-product/update-product.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GetProductByIdComponent } from './Component/Product/get-product-by-id/get-product-by-id.component';
// import { AddbillComponent } from './Component/bill/addbill/addbill.component';
// import { ViewbillComponent } from './Component/bill/viewbill/viewbill.component';
import { UpdateadminComponent } from './Component/Admin/updateadmin/updateadmin.component';
import { AddadminComponent } from './Component/Admin/addadmin/addadmin.component';
import { AllAdminComponent } from './Component/Admin/alladmin.component';
import { AdminListComponent } from './Component/Admin/adminlist.component';
import { AdminService } from './Services/admin.service';
import { FooterComponent } from './Component/footer/footer.component';
import { GetadminbyidComponent } from './Component/Admin/getadminbyid/getadminbyid.component';
import { AddCustomerComponent } from './Component/Customer/addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './Component/Customer/updatecustomer/updatecustomer.component';
import { AllcustomerComponent } from './Component/Customer/allcustomer/allcustomer.component';
import { GetcustomerbyidComponent } from './Component/Customer/getcustomerbyid/getcustomerbyid.component';
import { CustomerlistComponent } from './Component/Customer/customerlist/customerlist.component';
import { CartComponent } from './Component/cart/cart.component';
import { authInterceptorProviders } from './Services/auth-interceptor.service';
import { UserAuthGuardService } from './Services/user-auth-guard.service';
import { UserService } from './Services/user.services';
import { UserSignupComponent } from './Component/user-signup/user-signup.component';
import { Error404Component } from './Component/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AddProductComponent,
    ProductListComponent,
    // AddOrderComponent,
    // OrderListComponent,
    CustomerlistComponent,
  AddadminComponent,
    AddCustomerComponent,
    UpdatecustomerComponent,
    AllcustomerComponent,
    GetcustomerbyidComponent,
    // AddbillComponent,
    // ViewbillComponent,
    AddressComponent,
    AllAdminComponent,
   AdminListComponent,
    UpdateProductComponent,
    LogoutComponent,
    GetProductByIdComponent,
    GetadminbyidComponent,
    UpdateadminComponent,
    FooterComponent,
    UserSignupComponent,
    CartComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [AdminService,authInterceptorProviders,UserAuthGuardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
