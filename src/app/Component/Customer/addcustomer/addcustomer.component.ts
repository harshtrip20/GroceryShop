import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomerForm: FormGroup;
  customer: Customer = new Customer(1001, "Customer1","123456789", "customer@gmail.com", "customer");
  newCustomer : Customer ;
  error:any;
  constructor(private fb: FormBuilder, private CustomerService: CustomerService ,private router : Router) {
    console.log("Add Customer Component constructor executed")
  }

  ngOnInit() {
    console.log("Add Customer init method executed")
    this.addCustomerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      emailId: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      address:new FormGroup({
        flatNo:new FormControl('',[Validators.required]),
        buildingName:new FormControl('',[Validators.required]),
        area:new FormControl('',[Validators.required]),
        city:new FormControl('',[Validators.required]),
        state:new FormControl('',[Validators.required]),
        pincode:new FormControl('',[Validators.required])
      })
    });
  }
  addCustomer(addCustomerForm) {
    console.log("Add product -> Service" + this.addCustomerForm.value)
    this.CustomerService.addCustomer(this.addCustomerForm.value).subscribe(customer => {this.newCustomer = this.customer;this.router.navigate(['/allCustomer'])}
                                                                              ,err => this.error = err);
    
  }
  cancel(){
    this.router.navigate(['/allProducts']);
  }
}
