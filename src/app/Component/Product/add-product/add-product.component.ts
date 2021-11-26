import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService,private router:Router,private fb:FormBuilder) { }

  signUpForm:FormGroup;
  addProduct:string="Add Products";
  product:Product[];
  productList:string="Product List";
 
  ngOnInit() {
    console.log('add product ngOninit');

    this.signUpForm=this.fb.group({
     
      name:new FormControl('',[Validators.required]),
      category:new FormControl('',[Validators.required]),
     price:new FormControl('',[Validators.required,Validators.min(10)]),
             quantity:new FormControl('',[Validators.required,Validators.min(1)]),
    
       
    });
  }

  cancel(){
    this.router.navigate(['/allProducts'])
  }
  submitData(product:Product){
    console.log(this.product);
        this.productService.addProduct(this.signUpForm.value).subscribe(product=>{this.product,this.router.navigate(['/allProducts'])});
         
      }

}
