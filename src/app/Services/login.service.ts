import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  private base_url: string = "http://localhost:8888/authentication"

  public isUserLoggedIn: boolean = false;
  public userId: string;
  public role: string;
  public token: string;

  loginUser(userObj: User): Observable<any> {
    console.log("Login Service -> Spring boot Controller " + JSON.stringify(userObj))
    return this.httpClient.post<any>(this.base_url, userObj, this.httpOptions)
      .pipe(map(
                      res => {
                        console.log(res)
                        if (res.token && res.role) {
                          this.userId = userObj.userId
                          this.role = res.role
                          this.token = res.token;
                          this.isUserLoggedIn = true
                          // sessionStorage.setItem('userId', this.userId);
                          // sessionStorage.setItem('role', this.role);
                          // sessionStorage.setItem('token', res.token);
                          // sessionStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
                          localStorage.setItem('userId',this.userId);
                          localStorage.setItem('role',this.role);
                          localStorage.setItem('token',res.token);
                          localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

                          return res;
                        }
                      },
        error => error
      )
      );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    this.userId =  '';
    // sessionStorage.removeItem('isUserLoggedIn');
    // sessionStorage.removeItem('userId');
    // sessionStorage.removeItem('role');
    // sessionStorage.removeItem('token');

    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }

  checkLoginDetails(item:string){
    return localStorage.getItem(item);
  }
  // public removeItem(key:string) {
  //   localStorage.removeItem(key);
  // }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
