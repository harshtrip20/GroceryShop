import { Address } from "./Address";

export class Customer {
    constructor(
       public customerId?: number,
   public name?: string,
    public mobileNumber?: string,
    public emailId?: string,
    public password?: string,
     public address?: Address){}
  
   }

  
  