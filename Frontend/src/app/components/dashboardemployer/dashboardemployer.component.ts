import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-dashboardemployer',
  templateUrl: './dashboardemployer.component.html',
  styleUrls: ['./dashboardemployer.component.css']
})
export class DashboardemployerComponent implements OnInit {
countries:any;
cases:any;
table:any;
selectedValue:any;
morocco="morocco";

  constructor(private getInfo:CrudService) { }

  ngOnInit(): void {
    this.getInfo.getCases().subscribe(cases=>{
      this.cases = cases;
      console.log(this.cases);
    })
    this.getInfo.getCountry().subscribe(countries=>{
      this.countries = countries;
      this.getInfo.onchange$.subscribe((element:any)=>{
        console.log(this.cases)
        this.table =this.cases.filter((element1:any)=>element1.country.country == element);
        console.log(this.table)

      })
      console.log(this.countries);
      
    })


  }
  onchangex(country:any){
    console.log("a")
    this.getInfo.onChangeEvent(country)
  }
}