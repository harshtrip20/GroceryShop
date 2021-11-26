import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router) { }

  product:Product;
  error:any;

  ngOnInit() {
    console.log("update on init  " )
    this.productService.getProductById(+this.activatedRoute.snapshot.params['productId']).
      subscribe(res => this.product = res,
                 err => this.error = err  
                 )
    console.log("from backend  " + this.product)

  }
  updateProduct(updateProduct:Product){
    console.log("update component method");
    this.productService.updateProduct(updateProduct).subscribe(res=>this.product=res,err=>this.error=err);
    this.router.navigate(['/allProducts']);
  }
  cancel(){
    this.router.navigate(['/allProducts']);
  }

}
