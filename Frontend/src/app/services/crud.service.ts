import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get("http://localhost:8080/api/users/");
  }
  
}
