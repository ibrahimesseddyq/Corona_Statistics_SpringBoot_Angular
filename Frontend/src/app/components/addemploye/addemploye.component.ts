import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {

  route: ActivatedRoute | null | undefined;
  
  User:any;
  constructor(private http:HttpClient, private crud:CrudService, private router:Router) { }

  ngOnInit(): void {
    
  }
  
  postUser(addForm:any){

    this.User = addForm.value;
    console.log(this.User.Adresse);

    this.User.status == "true" ?
      this.User.status = true:this.User.status=false;
      console.log(this.User);
    this.crud.saveUser(this.User).subscribe((result)=>{
      console.log(result);
      setTimeout((e:any)=>{
        this.crud.saveRoleUser(this.User.username,"USER").subscribe((res)=>{
          // console.log(res);
          window.location.reload();
        })
      },1000);

    })

  //   this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['dashboaradmin']);
  // }); 


    // console.log(this.User.username + this.User.role);
  }

}
