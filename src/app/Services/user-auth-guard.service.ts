import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate {

  public isUserLoggedIn: string ;
   public userId: string;
   public role: string ;
   public token: string;

  constructor(private userService : LoginService , private router: Router) { }

   // return true URL will be activated other wise url will de activated.
   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    console.log("Login Route Guard!!!!!!!!!!")
    let url: string = state.url;
    return this.checkUserLogin(url,next);
 }

 checkUserLogin(url: string,route: ActivatedRouteSnapshot): true | UrlTree {
  console.log("Url: " + url)
  
//   let isUserLoggedIn: string = sessionStorage.getItem('isUserLoggedIn');
//   let userId: string = sessionStorage.getItem('userId');
//   let role: string = sessionStorage.getItem('role');
//   let token: string = sessionStorage.getItem('token');

  let isUserLoggedIn: string = localStorage.getItem('isUserLoggedIn');
  let userId: string = localStorage.getItem('userId');
  let role: string = localStorage.getItem('role');
  let token: string = localStorage.getItem('token');
  
  this.isUserLoggedIn = isUserLoggedIn;
  this.userId = userId
  this.role = role;
  this.token = token;


  //console.log(((url.search(role)) > 0));

  // console.log("Checking values  isUserLoggedIn " + isUserLoggedIn + "  User Name  " + userId  +"  Role  " + role + " Login Role " + this.userService.role +"  " + ((url.search(role)) > 0))


  if (isUserLoggedIn != null && isUserLoggedIn == "true" && userId && role && role === route.data.role) {
     if (url == "/login")
        this.router.navigate(['/login']);
     else
     console.log("Logged In " + isUserLoggedIn + "  User Name  " + userId  +"  Role  " +  route.data.role)
     return true;
  } else {
      console.log("Not Logged In " + isUserLoggedIn + "  userId  " + userId  +"  Role  " +  route.data.role)
      alert("Login as "+ route.data.role+"  to access the "+ url);
      this.isUserLoggedIn = "false";
      this.userId = '';
      localStorage.removeItem('userId');
      localStorage.removeItem('role');
      localStorage.removeItem('token');
     return this.router.parseUrl('/login');
  }
}

}
