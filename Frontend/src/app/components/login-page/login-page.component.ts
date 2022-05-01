import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { catchError, pipe } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { state } from '@angular/animations';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  route: ActivatedRoute | null | undefined;

  constructor(private http:HttpClient
              ,private router:Router
              ,private loginService:LoginService) { 

  }

  ngOnInit(): void {

  }
  login(form: any){
    let b:any;
    this.loginService.login(form).subscribe((e:any)=>{
      setTimeout((a:any)=>{
          b = e;
          console.log(b);
          b = jwtDecode(b.access_token);
      },500)
 
    })
    setTimeout((e:any)=>{
      if(b){
        console.log(b.roles[0]);
        if(b.roles[0] == "ADMIN"){
          this.router.navigate(['/dashboardadmin'], { relativeTo: this.route });
        }
        else{
          this.router.navigate(['/dashboardemployer'], { relativeTo: this.route });
        }
      }
      else{
        document.getElementById("error")?.classList.remove("d-none");
      }
    },1000)
  }
}
