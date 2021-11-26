import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-getadminbyid',
  templateUrl: './getadminbyid.component.html',
  styleUrls: ['./getadminbyid.component.css']
})
export class GetadminbyidComponent implements OnInit {

  admin: Admin;
  error: any;
  constructor(private adminService: AdminService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    console.log(+this.route.params['adminId'])
    this.adminService.getAdminById(+this.route.snapshot.params['adminId']).
      subscribe(res => this.admin = res,
        err => this.error = err
      );

  }
  getAdmin(adminId : number){
    console.log("Admin ID " + adminId)
    // Call an Component that component should give you form with existing details.
    this.router.navigate(['/updateadmin',adminId])
  }

}
