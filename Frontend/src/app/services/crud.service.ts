import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  onchange$ = new Subject();


  constructor(private http:HttpClient) { }

  onChangeEvent(item:any){
    this.onchange$.next(item)
  }
  
  getUsers(){
    return this.http.get("http://localhost:8080/api/users/");
  }
  saveUser(data:any){
    console.log(data);
    return this.http.post("http://localhost:8080/api/users/save",data);
  } 

  saveRoleUser(name:any,role:any){
    let data = {username:name,role:role};
    return this.http.post("http://localhost:8080/api/users/role/addtouser",data);
  }

  getCountry(){
    return this.http.get("http://localhost:8080/api/cases/countries");

  }
  getCases(){
    return this.http.get("http://localhost:8080/api/cases/");
  }

  getUserById(id:any){
    return this.http.get("http://localhost:8080/api/users/" + id);
  }

  generGraph(data:any){
    // let data = {"country":country,"startDate":startDate,"endDate":endDate};
    return this.http.post("http://localhost:8080/api/cases/graph",data);
  }

  updateUserStatus(idUser:any,status:any){
    let user = {
      "id":idUser,
      "status":status,
    }
    return this.http.put("http://localhost:8080/api/users/",user);
  }
}
// runni