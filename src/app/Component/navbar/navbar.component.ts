import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  roleAdmin:string;
  roleCustomer:string;
  isUserLoggedIn: string;

  ngOnInit() {
     this.roleAdmin=localStorage.getItem('role');
     this.roleCustomer=localStorage.getItem('customer');
      this.isUserLoggedIn=localStorage.getItem('isUserLoggedIn');

      
  }
  // logout(){
  //   localStorage.clear();
  // }

}
