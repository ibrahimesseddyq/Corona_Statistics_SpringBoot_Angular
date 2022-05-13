import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  user:any;
  constructor(private crud:CrudService,private shared:SharedService) { }

  ngOnInit(): void {
    this.user = this.shared.getData();
    this.user = JSON.parse(this.user);
  }
}
