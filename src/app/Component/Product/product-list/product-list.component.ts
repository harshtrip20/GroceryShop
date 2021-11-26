import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { LoginService } from 'src/app/Services/login.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router,private activatedRoute:ActivatedRoute,public loginService:LoginService) { }
 
  product:Product[];
  name:String;
  p:number=1;
  productList:string="Product List";
  error:any;
 
  products: Array<Product>;
  productsRecieved: Array<Product>;
  cartProducts: any;
  roleAdmin:string;
  roleCustomer:string;

  ngOnInit() {
    console.log("product Oninit");
     
    this.getProducts();
    this.productService.getAllProducts().subscribe(  response => this.handleSuccessfulResponse(response), err => this.error = err.error.message)
      ;
      let data = localStorage.getItem('cart');
      console.log("product list "+data);

      //if this is not null convert it to JSON else initialize it as empty
      if (data !== null) {
        this.cartProducts = JSON.parse(data);
      } else {
        this.cartProducts = [];
      }

  }

  getProducts(){
    this.error='';
    this.product=[];
    this.productService.getAllProducts().subscribe(product => this.product = product, err => this.error=err.error.message)
    ;
  }
  addProducts(){
    this.router.navigate(['/product']);
  }

  Search(){
    if(this.name==""){
      this.ngOnInit();
    }
    else{
      this.product=this.product.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  getDetails(productId:number) {
    alert('product id'+productId);
    this.router.navigate(['productById', productId]);
  }
  deleteProduct(productId:number){
  alert('product deleted'+productId);
  this.productService.deleteProductById(productId).subscribe(res=>{this.product;this.getProducts()},err=>this.error=err);
  
  }

  updateProduct(product:Product){
 alert('product updated'+ JSON.stringify(product));
 this.router.navigate(['updateProduct',product.productId]);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartProducts = [];
    // localStorage.clear();
    localStorage.removeItem('cart');
  }

  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    //get books returned by the api call
    this.productsRecieved = response;
    for (const prod of this.productsRecieved) {

      const productwithId = new Product();
      productwithId.productId= prod.productId;
      productwithId.name = prod.name;
      productwithId.category = prod.category;
      productwithId.price = prod.price;
      productwithId.quantity = prod.quantity;
      this.products.push(productwithId);
    }
  }
}
