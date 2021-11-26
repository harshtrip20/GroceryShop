import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Admin } from '../Models/admin';

@Injectable()
export class AdminService {

  private base_url: string = "http://localhost:8888/admin"

  constructor(private httpClient: HttpClient) {
  }

  addAdmin(admin: Admin) : Observable<Admin> {
    console.log("Add Admin -> Spring boot " + JSON.stringify(admin));
    return this.httpClient.post<Admin>(this.base_url, admin, this.httpOptions)
            .pipe(tap(res => console.log(res)));
   }


 getAllAdmins() : Observable<Admin[]> {
  return this.httpClient.get<Admin[]>(this.base_url);
 }

 deleteAdminById(adminId: number): Observable<Admin> {
  console.log("delete admin By ID  service " + adminId);
  const getadmin_url = `${this.base_url}/${adminId}`;
  return this.httpClient.delete<Admin>(getadmin_url).pipe(tap(res => console.log(res)));
}

 getAdminById(adminId : number) : Observable<Admin> {
  console.log("Get Admin By ID   " + adminId)
  const getAdmin_url = `${this.base_url}/${adminId}`;
  return this.httpClient.get<Admin>(getAdmin_url).pipe(tap(res => console.log(res)));
}
public updateAdmin(admin: Admin): Observable<Admin> {
  console.log("********" + JSON.stringify(admin))
  const updateadmin_url = `${this.base_url+"/update"}`;
  return this.httpClient.put<Admin>(updateadmin_url, admin, this.httpOptions);
}
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


}

//  const admins : Admin[] = [
//     {
//       adminId: 1,
//       contactNumber: 123456789,
//       emailId: "admin@gmail.com",
//       name: "adam",
//       status: "newadmin",
    
//     },
//     {
//       adminId: 2,
//       contactNumber: 123456789,
//       emailId: "admin@gmail.com",
//       name: "adam",
//       status: "newadmin",
      
//     },
//     {
//       adminId: 3,
//       contactNumber: 123456789,
//       emailId: "admin@gmail.com",
//       name: "adam",
//       status: "newadmin",
     
//     },
//     {
//       adminId: 4,
//       contactNumber: 123456789,
//       emailId: "admin@gmail.com",
//       name: "adam",
//       status: "newadmin",
    
//     }
//   ]

