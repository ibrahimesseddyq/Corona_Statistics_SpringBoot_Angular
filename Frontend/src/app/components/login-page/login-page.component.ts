import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { catchError, pipe } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { state } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  route: ActivatedRoute | null | undefined;

  public userName:any;
  public user:any;

  constructor(private http:HttpClient
              ,private router:Router
              ,private loginService:LoginService, private shared:SharedService) { 
  }

  ngOnInit(): void {

  }
  login(form: any){
    let b:any;
    this.loginService.login(form).subscribe((e:any)=>{
      setTimeout((a:any)=>{
          b = e;
          b = jwtDecode(b.access_token);

          this.userName = b.sub;
          this.loginService.getUser(this.userName).subscribe((e:any)=>{
            this.user = e;
            this.shared.setData(this.user);
          })
      },500); 
    })


    setTimeout((e:any)=>{
      if(b){
        if(b.roles[0] == "ADMIN"){
          this.router.navigate(['/dashboardadmin'], { relativeTo: this.route });
        }
        else{
          let statusUser;
          if(this.user.status == false){
            this.router.navigate(['/disable'], { relativeTo: this.route });
          }
          else{
            this.router.navigate(['/dashboardemployer'], { relativeTo: this.route });
  
          }
        }
      }
      else{
        document.getElementById("error")?.classList.remove("d-none");
      }
    },1000)
  }
}
