import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {

  Users:any;
  Employees:any;
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    this.crud.getUsers().subscribe(Users=>{
      this.Users = Users;
      console.log(this.Users);
      this.Employees = this.Users.filter((employee:any)=>employee.roles[0].role == "USER");
    })

    
  }

}
