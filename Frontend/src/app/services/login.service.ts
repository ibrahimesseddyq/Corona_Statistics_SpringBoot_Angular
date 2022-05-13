import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe,catchError } from 'rxjs';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {
   }

   login(form:any){
    const formData = new FormData();
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
      const body = new URLSearchParams();
      body.set('username', form.value.username);
      body.set('password', form.value.password);
      // console.log(form);
      return this.http.post("http://localhost:8080/login",body.toString(),options);

   }

   getUser(userName:any){
    return this.http.get(`http://localhost:8080/api/users/username/${userName}`);
   }

  //  getUserUsername(username){
  //    this.http.get("http://localhost:8080/api/users/username/"+username);
  //  }
}
