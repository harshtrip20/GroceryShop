import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
//import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserService {

 // private _usr: string = "/assets/data/user.json";

  constructor(private http:HttpClient) { }

  // validatelogin(l:Login):Observable<any>{
  //  // alert("userId: "+l.userId+", password: "+l.password);
  // let x= this.http.post<any>("http://localhost:9019/rest/users/login.do",l);
  // //alert(x);
  // return(x);
  // }

  addUser(user:User): Observable<User>{
   // alert(JSON.stringify(user));
    return this.http.post<User>("http://localhost:8888/users/adduser",user)
                      //.catch(this.errorHandler);
    }

  // deleteUserByID(userId:string):Observable<User>{
  //   alert("Deleting user with :"+userId);
  //     return this.http.delete<User>(`http://localhost:9019/rest/users/delete/${userId}`)
  //                       //.catch(this.errorHandler);
        
  //   }
  
  // getuserByRole(role:string): Observable<User[]>{
  //     return this.http.get<User[]>(`http://localhost:9019/rest/users/listbyrole/${role}`)
  //                     //.catch(this.errorHandler);
  //   }  

  // getAllUsers(): Observable<User[]>{
  //     return this.http.get<User[]>("http://localhost:9019/rest/users");
  //                    // .catch(this.errorHandler);
  //   }

  /*errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }*/

}
