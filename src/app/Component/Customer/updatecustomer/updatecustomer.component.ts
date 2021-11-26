import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  
  customer: Customer;
  error: any;
 

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {
    console.log("Update Customer Component constructor executed")
    console.log("Update Customer init method executed" + +this.route.snapshot.params['customerId'])
  }


  ngOnInit() {
    console.log("The customer ng on init is calling Service " )
    this.customerService.getCustomerById(+this.route.snapshot.params['customerId']).
      subscribe(res => this.customer = res,
                 err => this.error = err  
                 )
    console.log("The customer ng oninit from service fetched waiting the data from back end  " + this.customer)

  }



  updateCustomer(updatedCustomer: Customer) {
    console.log("update  customer -> Service" + updatedCustomer)
    this.customerService.updateCustomer(updatedCustomer).subscribe(res => {this.customer = res;this.router.navigate(['/alladmins'])},
                                                               err => this.error = err);
    
  }


  cancel() {
    this.router.navigate(['/allcustomers']);
  }
  

}


