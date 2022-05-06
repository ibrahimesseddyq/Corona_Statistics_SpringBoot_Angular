import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-chart',
  templateUrl: './ngx-chart.component.html',
  styleUrls: ['./ngx-chart.component.css']
})
export class NgxChartComponent implements OnInit {
  single: any[]=[];
  multi: any[]=[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() { }

  ngOnInit(): void {
  }

}
