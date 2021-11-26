import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  addAdminForm: FormGroup;
  admin: Admin = new Admin(1001, "admin1",123456789, 'admin@gmail.com', 'admin');
  newAdmin : Admin ;
  error:any;
  constructor(private fb: FormBuilder, private adminService: AdminService,private router : Router) {
    console.log("Add admin Component constructor executed")
  }

  ngOnInit() {
    console.log("Add admin init method executed")
    this.addAdminForm = new FormGroup({
      name: new FormControl(this.admin.name, [Validators.required, Validators.minLength(5)]),
      contactNumber: new FormControl(this.admin.contactNumber, [Validators.required]),
      emailId: new FormControl(this.admin.emailId,[Validators.required,Validators.email]),
      status: new FormControl(this.admin.status, [Validators.required]),
    });
  }
  addAdmin() {
    console.log("Add product -> Service" + this.addAdminForm.value)
    this.adminService.addAdmin(this.addAdminForm.value).subscribe(admin => {this.newAdmin = admin;this.router.navigate(['/alladmins'])}
                                                                              ,err => this.error = err);
    
  }
  cancel(){
    this.router.navigate(['/alladmins']);
  }
}
