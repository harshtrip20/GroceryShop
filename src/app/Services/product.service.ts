import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  private base_url:string="http://localhost:8888/products";

  addProduct(product:Product):Observable<Product>{
    console.log('add product service');
 return this.httpClient.post<any>(this.base_url+"/addProduct",product,this.httpOptions).pipe(tap(product=>console.log(product)));
  }
  getAllProducts():Observable<Product[]>{
    //return this.product;
    console.log('product service');
   return this.httpClient.get<any>(this.base_url+"/viewAllProduct").pipe(tap(res=>console.log(res)));
 }

 getProductById(productId: number): Observable<Product> {
  console.log("Get Product By ID  service " + productId);
  const getproduct_url = `${this.base_url}/${productId}`;
  return this.httpClient.get<Product>(getproduct_url).pipe(tap(res => console.log(res)));
}
deleteProductById(productId: number): Observable<Product> {
  console.log("delete Product By ID  service " + productId);
  const getproduct_url = `${this.base_url}/${productId}`;
  return this.httpClient.delete<Product>(getproduct_url).pipe(tap(res => console.log(res)));
}

public updateProduct(product: Product): Observable<Product> {
  console.log("update in service" + product)
  const updateproduct_url = `${this.base_url+"/updateProduct"}/${product.productId}`;
  return this.httpClient.put<Product>(updateproduct_url, product, this.httpOptions);
}


  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
 

}
