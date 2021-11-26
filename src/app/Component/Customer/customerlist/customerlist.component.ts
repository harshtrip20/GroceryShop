import { error } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  @Input() newCustomer;
  
  @Output() callParent = new EventEmitter
  error: any;

  customer:Customer[];
  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customer => this.newCustomer = customer, err => this.error=err.error.message);
  
  }
  addCustomer(){
this.router.navigate(['/customer']);
  }

  updateCustomer(customerId:number){
this.router.navigate(['/updatecustomer',customerId])
  }

  deleteCustomer(customerId:number){
    this.customerService.deleteCustomerById(customerId).subscribe(res=>this.customer,err=>this.error=err);
    this.router.navigate(['/allCustomer']);
  }
}
