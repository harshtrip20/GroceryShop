import { error } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { Customer } from 'src/app/Models/Customer';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'admin-list',
  templateUrl: './adminlist.component.html'
  ,


  // styleUrls: ['./app.component.css']
})
export class AdminListComponent implements OnInit {
  // title = 'productapplication';
  // To Receieve the from Parent
  @Input() newAdminlist;
 
  // @Input() totalPriceAfterDiscount;
  @Output() callParent = new EventEmitter
  // admin:Admin[];
  name: String;
  error: any;
  p:number=1;

  constructor(private adminService: AdminService, private router: Router) { }
  ngOnInit(): void {
    //   this.productService.getAllProducts().subscribe(product => this.product = product, err => console.log('error caught' + error));
  this.getAdmins();  
  }

      getAdmins(){
        this.error='';
        this.newAdminlist=[];
        this.adminService.getAllAdmins().subscribe(product => this.newAdminlist = product, err => this.error=err.error.message);

      }
 
  updateAdmin(adminId: number) {
    this.router.navigate(['/updateadmin', adminId]);
  }

  addAdmin(){
    this.router.navigate(['/addadmin']);
  }

  Search() {
    if (this.name == "") {
      this.ngOnInit();
    }
    else {
      this.newAdminlist = this.newAdminlist.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  deleteAdmin(adminId:number){
    alert('product deleted'+adminId);
    this.adminService.deleteAdminById(adminId).subscribe(res=>{this.newAdminlist=res;this.getAdmins()},err=>this.error=err);
    
    }

}
// Event is fired on html element/Component
// When an event occurs we call a functio