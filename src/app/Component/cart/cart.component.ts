import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }

  products: Array<Product>;
  cartProducts: Array<Product>;
  totalPrice=0;
  

  ngOnInit() {
    // this.cartProducts.
this.cartProducts=JSON.parse(localStorage.getItem('cart'));
console.log(JSON.stringify(this.cartProducts));
  }

  proceedToBuy(){
    
    console.log(this.cartProducts);
    // this.cartProducts.forEach(function (product) {
    //   console.log(product.price);
    //   this.totalPrice=product.price+this.totalPrice;
      
    // });
    for (var product of this.cartProducts) {
      this.totalPrice=product.itemQuantityPrice+this.totalPrice;
      console.log(this.totalPrice); }
    alert(this.totalPrice);
    // this.cartProducts.forEach()
  this.router.navigate(['/add-bill'])
  }

  removeFromCart(i:number){

 this.cartProducts.splice(i,1);
 localStorage.setItem('cart',JSON.stringify(this.cartProducts));
  
  }

  cancel(){
    this.router.navigate(['/allProducts']);
  }
}
