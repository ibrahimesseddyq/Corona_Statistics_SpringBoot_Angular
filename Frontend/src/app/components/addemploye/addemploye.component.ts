import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {

  User:any;
  constructor(private http:HttpClient, private crud:CrudService) { }

  ngOnInit(): void {
  }
  
  postUser(addForm:any){
    this.User = addForm.value;
    this.User.status == "true" ?
      this.User.status = true:this.User.status=false;
      console.log(this.User);
    this.crud.saveUser(this.User).subscribe((result)=>{
      console.log(result);
      setTimeout((e:any)=>{
        this.crud.saveRoleUser(this.User.username,"USER").subscribe((res)=>{
          console.log(res);
        })
      },1000);

    })


    // console.log(this.User.username + this.User.role);
  }

}
