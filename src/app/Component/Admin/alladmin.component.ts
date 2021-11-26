import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'all-admin',
  template: `
  <hr/>
  <div *ngIf="errors" class="alert alert-danger">
                          {{errors.error.message}}
  </div>
  <div class="container">
  <div class="row " >
    <div  >
<admin-list  [newAdminlist]=admins (callParent)="receieveDataFromChild($event)"></admin-list>
</div>
</div>
</div>`
  ,
  //styleUrls: ['./app.component.css']
})
export class AllAdminComponent implements OnInit {
  // title = 'productapplication';
  appName: string = "Admin Management"
  admins: Admin[];
  errors: any;
 
  constructor(private adminService: AdminService) {
    console.log("AllAdmin Constructor**********")
  }
  ngOnInit(): void {
    console.log("Alladmin init**********")
    this.adminService.getAllAdmins().subscribe(
      admins => this.admins = admins,
      error => this.errors = error
    );
  }

  receieveDataFromChild(adminId) {
    alert("Admin ID:" + adminId)
  }
}
