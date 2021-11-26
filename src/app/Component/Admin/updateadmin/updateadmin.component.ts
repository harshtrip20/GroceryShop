import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {

  admin: Admin;
  error: any;
  //public showContent: boolean = false;

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router, private route: ActivatedRoute) {
    console.log("Update Product Component constructor executed")
    console.log("Update Product init method executed" + +this.route.snapshot.params['adminId'])
  }


  ngOnInit() {
    console.log("The admin ng on init is calling Service " )
    this.adminService.getAdminById(+this.route.snapshot.params['adminId']).
      subscribe(res => this.admin = res,
                 err => this.error = err  
                 )
    console.log("The admin ng oninit from service fetched waiting the data from back end  " + this.admin)

  }



  updateAdmin(updatedAdmin: Admin) {
    console.log("update  admin -> Service" + updatedAdmin)
    this.adminService.updateAdmin(updatedAdmin).subscribe(res => {this.admin = res;this.router.navigate(['/alladmins'])},
                                                               err => this.error = err);
    
  }


  cancel() {
    this.router.navigate(['/alladmins']);
  }
  

}
