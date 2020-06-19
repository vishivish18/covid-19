import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  appRoot = environment.appRoot;
  allData: Object
  timeSeries
  inputObject:Object = {}
  inputObjectAnother:Object = {}
  innerWidth:any
  innerHeight:any
  graphHeight:Number
  graphWidth:Number

  constructor(private http: HttpClient) { 
    this.innerWidth = window.innerWidth
    this.innerHeight = window.innerHeight 
  }

  ngOnInit() {
    this.getTimeSeriesData()
    let margin = { top: 50, left:50, right:50, bottom: 50}
    this.graphHeight = (2/3) * this.innerWidth
    this.graphWidth = (2/3) * this.innerWidth
    //this.graphWidth = 500

  }


  async getTimeSeriesData() {
    let obs = this.http.get(this.appRoot+'/api/v0.1/analytics/count?scope=world&source=US&duration=all')
    await obs.subscribe((res) => {
      this.allData = res[0]
      this.timeSeries = this.allData['timeSeries']
      this.timeSeries.forEach(element => {
        element['date'] = new Date(element['date']).toLocaleDateString()
        this.inputObject[element['date']] = element['confirmed']['delta']
      });
      //console.log(this.inputObject)
      //console.log(Object.values(this.inputObject))
      this.barChartData[0].data =Object.values(this.inputObject)
      this.barChartLabels = Object.keys(this.inputObject)
    })
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Daily Cases' }
  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}