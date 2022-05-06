import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
user:any;
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    this.crud.getUserById(16).subscribe(user=>{
      this.user = user;
      console.log(user);
    })
  }
}
