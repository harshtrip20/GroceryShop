import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';


@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']
})
export class AllcustomerComponent implements OnInit {
  appName: string = "Customer Management"
  customers: Customer[];
  errors: any;
  constructor(private customerService: CustomerService) {
    console.log("AllCustomer Constructor**********")
  }
  ngOnInit(): void {
    console.log("Allcustomer init**********")
    this.customerService.getAllCustomers().subscribe(
      customers => this.customers = customers,
      error => this.errors = error
    );
  }

  receieveDataFromChild(customerId) {
    alert("Customer ID:" + customerId)
  }

  

 

}
