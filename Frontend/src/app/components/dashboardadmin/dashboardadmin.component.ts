import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {
  user:any;
  constructor(private shared:SharedService) { }
  
  ngOnInit(): void {
    // this.user = this.shared.getData();
    // console.log(this.user);

  }

}
