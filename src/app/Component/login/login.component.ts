import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`em{float:right; color: #E05c65; padding-left-10px;},
`
,]
})
export class LoginComponent implements OnInit {
// data -> pass the data to Form [Property binding]
user: User = new User('','','');
error:any;
constructor(private loginService: LoginService,private router : Router) { }

ngOnInit() {
}

loginUser(loginFormdata) {

  console.log("Captured the data from Login Form - > service " + JSON.stringify(this.user))
  console.log(loginFormdata)
  this.loginService.loginUser(loginFormdata).subscribe(
                                                        res =>  this.router.navigate(['/allProducts']),
                                                        resError => {
                                                          this.error = resError
                                                          console.log("***"+ JSON.stringify(resError))
                                                        }
                                                        );
}

signUp(){
  this.router.navigate(['/user-signUp']);
}
}
