import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';


let btnStatus = document.querySelectorAll(".status");
  console.log(btnStatus);
  btnStatus.forEach(value => {
  value.addEventListener("click",(e)=>{
    console.log("true");
  })
});

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})



export class ListemployeComponent implements OnInit {

  userInfo:any;
  Users:any;
  Employees:any;

  userIdUpdate:any;
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    setTimeout((e:any)=>{

      this.crud.getUsers().subscribe(Users=>{
        this.Users = Users;
        console.log(this.Users);
        this.Employees = this.Users.filter((employee:any)=>employee.roles[0].role == "USER");
      })
    },1000);

    this.userInfo = {
    }
    
  }
  
  changeStatus(value:any,userId:any){
    this.userIdUpdate = userId;
    console.log(value+this.userIdUpdate);
    this.crud.getUserById(userId).subscribe(User=>{
      this.userInfo = User;
      console.log(this.userInfo);
    })
  }

  updateStatusUser(user:any){
    let status = user.form.value.status;
    this.crud.updateUserStatus(this.userIdUpdate,status).subscribe(User=>{
      this.userInfo = User;
      window.location.reload();
    })
  }
}