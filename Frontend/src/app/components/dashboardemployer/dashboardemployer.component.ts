import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-dashboardemployer',
  templateUrl: './dashboardemployer.component.html',
  styleUrls: ['./dashboardemployer.component.css']
})
export class DashboardemployerComponent implements OnInit {
  multi: any[] = [
    {
      "name": "2022-03",
      "series": [
        {
          "name": "n case",
          "value": 100
        },
        {
          "name": "n mort",
          "value": 73
        }
      ]
    },
    {
      "name": "2022-04",
      "series": [
        {
          "name": "n case",
          "value": 100
        },
        {
          "name": "n mort",
          "value": 73
        }
      ]
    },
    {
      "name": "2022-05",
      "series": [
        {
          "name": "n case",
          "value": 100
        },
        {
          "name": "n mort",
          "value": 73
        }
      ]
    }
  ];


  view: [number, number] = [700, 400];
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Dates';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = '';
  legendTitle: string = '';

  // colorScheme = {
  //   domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  // };

 onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  update$: Subject<any> = new Subject();
  dataSelect:any;

  graphData : any[] = [
  ];

countries:any;
cases:any;
table:any;
selectedValue:any;
morocco="morocco";

dataGraph:any;
  router: any;

  constructor(private getInfo:CrudService,private reouter:Router) {
   }

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

  postData(data:any){
    this.dataGraph = data.form.value;
    console.log(this.dataGraph);

    this.getInfo.generGraph(this.dataGraph).subscribe(data=>{
      this.graphData = [];
      this.dataSelect = data;
      this.dataSelect.forEach((value: any) => {
        // if(value.date.month%10 == 0){
        //   value.date.month = 
        // }
        let data = { "name":'20'+ value.date.year + '-' + "{{value.date.month}}","series":[
          {
            "name":"n case",
            "value":value.caseno
          },
          {
            "name":"n mort",
            "value":value.deathno
          }
        ]};

        this.graphData.push(data)
        this.graphData = [...this.graphData];
        
        console.log(this.graphData);
        const ngx = document.querySelector(".ngx");
        ngx?.classList.remove("d-none");
      });

      // this.graphData = [];

    });


  }


  
}