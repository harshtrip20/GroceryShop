import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';

import { UserService } from 'src/app/Services/user.services';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  userForm: FormGroup;
  users: User[];
  user:User;
  constructor(private fb: FormBuilder,private router: Router, private service:UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  addUser():void {
    let user: User = new User(this.userForm.controls.userId.value, 
        this.userForm.controls.password.value,
        this.userForm.controls.role.value,
        );

    this.service.addUser(user).subscribe(data =>{
     // alert("data: "+data.password);
     if(data.role=="Customer"){
     alert("You have Signed up Sucessfully as "+data.role+" You can fill your personal information now");
     }
     else{
      alert("You have Signed up Sucessfully as "+data.role+" You can fill your personal information now");
     }
      this.users.push(user);
    });
    if(this.userForm.controls.role.value=="Customer"){
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
