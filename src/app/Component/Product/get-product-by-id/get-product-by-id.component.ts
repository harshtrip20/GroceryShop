import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-get-product-by-id',
  templateUrl: './get-product-by-id.component.html',
  styleUrls: ['./get-product-by-id.component.css']
})
export class GetProductByIdComponent implements OnInit {

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  product: Product;
  error: any;

  products: Array<Product>;
  productsRecieved: Array<Product>;

  inputnumber = 0;
  cartProducts: any;


  ngOnInit() {
    console.log("component id=" + this.activatedRoute.snapshot.params['productId']);
   this.productService.getProductById(this.activatedRoute.snapshot.params['productId']).
      subscribe(res => this.product = res,
        err => this.error = err

      );
      
    

    this.productService.getAllProducts().subscribe(  response => this.handleSuccessfulResponse(response), err => this.error = err.error.message)
      ;

    let data = localStorage.getItem('cart');

    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }
    
  }

  buyProduct(productId: number) {
    this.router.navigate(['/orderDetails', productId]);
  }


  addToCart(productId) {
    
   var quantity=parseInt( (<HTMLInputElement>document.getElementById("quantity")).value);
   
  console.log(quantity)
    console.log(JSON.stringify(this.products));
    console.log(this.cartProducts);
    let product = this.products.find(product => {
      return product.productId === +productId;
    });
    if(quantity<=this.product.quantity){
    let itemPrice=quantity*product.price;
    product.itemQuantityPrice=itemPrice;
    alert(itemPrice);
    let cartData = [];
   
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }

    // add the selected product to cart data
    cartData.push(product);
    //updated the cartBooks
    this.updateCartData(cartData);
    
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the product added to cart as true
    product.isAdded = true;
    this.router.navigate(['/allProducts'])
    }
    else{
      alert('unavialable products')
    }
    
    
  }

  updateCartData(cartData) {
    console.log( "card products="+this.cartProducts);
    this.cartProducts = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartProducts = [];
    localStorage.clear();
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
  plus()
  {
   this.inputnumber = this.inputnumber+1;
  }
  minus()
  {
    if(this.inputnumber != 0)
  {
   this.inputnumber = this.inputnumber-1;
  }
  
  }

}
