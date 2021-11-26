import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-getcustomerbyid',
  templateUrl: './getcustomerbyid.component.html',
  styleUrls: ['./getcustomerbyid.component.css']
})
export class GetcustomerbyidComponent implements OnInit {


    customer: Customer;
    error: any ;
    constructor(private customerService: CustomerService, private route: ActivatedRoute,private router: Router) { }
  
    ngOnInit() {
      console.log(+this.route.snapshot.params['customerId'])
      this.customerService.getCustomerById(+this.route.snapshot.params['customerId']).
        subscribe(res => this.customer = res,
          err => this.error = err
        );
  
    }
    getCustomer(customerId : number){
      console.log("Customer ID " + customerId)
      // Call a Component that component should give you form with existing details.
      this.router.navigate(['/updatecustomer',customerId])
    }
  
  }


