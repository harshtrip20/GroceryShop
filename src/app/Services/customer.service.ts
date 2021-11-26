import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { Customer } from "../Models/Customer";


@Injectable({
  providedIn: "root",
})
export class CustomerService {
    private base_url: string = "http://localhost:8888/customer"

    constructor(private httpClient: HttpClient) {
    }
  
    addCustomer(customer: Customer) : Observable<Customer> {
      console.log("Add Customer -> Spring boot " + JSON.stringify(customer));
      return this.httpClient.post<Customer>(this.base_url, customer, this.httpOptions)
              .pipe(tap(res => console.log(res)));
     }
  
  
   getAllCustomers() : Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.base_url);
   }
   getCustomerById(CustomerId : number) : Observable<Customer> {
    console.log("Get Customer By ID   " + CustomerId)
    const getCustomer_url = `${this.base_url}/${CustomerId}`;
    return this.httpClient.get<Customer>(getCustomer_url).pipe(tap(res => console.log(res)));
  }
  deleteCustomerById(customerId: number): Observable<Customer> {
    console.log("delete customer By ID  service " + customerId);
    const getproduct_url = `${this.base_url}/${customerId}`;
    return this.httpClient.delete<Customer>(getproduct_url).pipe(tap(res => console.log(res)));
  }

  public updateCustomer(Customer: Customer): Observable<Customer> {
    console.log("********" + JSON.stringify(Customer))
    const updateCustomer_url = `${this.base_url+"/update"}`;
    return this.httpClient.put<Customer>(updateCustomer_url, Customer, this.httpOptions);
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };





  // customers : Customer[] = [
  //    {
  //   "customerId": 1,
  //   "name": "customer1",
  //   "contactNumber": "12345",
  //   "address": {
  //       "addressId": 101,
  //   "flatNo": "flat1",
  //   "buildingName": "building1",
  //    "area": "area1",
  //   "city": "city1",
  //   "state": "state1",
  //   "pincode": "4400",
  //           },
  //   "emailId": "string@gmail.com",
  //   "password": "password",
  //    },

  //    {
  //       "customerId": 2,
  //       "name": "customer2",
  //       "contactNumber": "12345",
  //       "address": {
  //           "addressId": 102,
  //       "flatNo": "flat2",
  //       "buildingName": "building2",
  //        "area": "area2",
  //       "city": "city2",
  //       "state": "state2",
  //       "pincode": "4400",
  //               },
  //       "emailId": "string2@gmail.com",
  //       "password": "password2",
  //        },

  //        {
  //           "customerId": 3,
  //           "name": "customer3",
  //           "contactNumber": "12345",
  //           "address": {
  //               "addressId": 103,
  //           "flatNo": "flat3",
  //           "buildingName": "building3",
  //            "area": "area3",
  //           "city": "city3",
  //           "state": "state3",
  //           "pincode": "4400",
  //                   },
  //           "emailId": "string3@gmail.com",
  //           "password": "password3",
  //            },

  //            {
  //               "customerId": 4,
  //               "name": "customer4",
  //               "contactNumber": "12345",
  //               "address": {
  //                   "addressId": 104,
  //               "flatNo": "flat4",
  //               "buildingName": "building4",
  //                "area": "area4",
  //               "city": "city4",
  //               "state": "state4",
  //               "pincode": "4400",
  //                       },
  //               "emailId": "string4@gmail.com",
  //               "password": "password4",
  //                },
  //                {
  //                   "customerId": 5,
  //                   "name": "customer5",
  //                   "contactNumber": "12345",
  //                   "address": {
  //                       "addressId": 105,
  //                   "flatNo": "flat5",
  //                   "buildingName": "building5",
  //                    "area": "area5",
  //                   "city": "city5",
  //                   "state": "state5",
  //                   "pincode": "4400",
  //                           },
  //                   "emailId": "string5@gmail.com",
  //                   "password": "password5",
  //                    },
                            

    
  //   ]
}
