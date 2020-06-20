import { Component, OnInit, Input } from '@angular/core';
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
  @Input()
  source: String

  @Input()
  type: String

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
    let obs = this.http.get(this.appRoot+'/api/v0.1/analytics/count?scope=world&source='+this.source+'&duration=all')
    await obs.subscribe((res) => {
      this.allData = res[0]
      this.timeSeries = this.allData['timeSeries']
      this.timeSeries.forEach(element => {
        element['date'] = new Date(element['date']).toLocaleDateString()
        if(this.type == 'Confirmed') {
          this.inputObject[element['date']] = element['confirmed']['delta']
          this.chartColors[0].backgroundColor ='blue'
        }else if(this.type == 'Deaths') {
          this.inputObject[element['date']] = element['deaths']['delta']
          this.chartColors[0].backgroundColor ='red'
        }else if(this.type == 'Recovered') {
          this.inputObject[element['date']] = element['recovered']['delta']
          this.chartColors[0].backgroundColor ='green'
        }else if(this.type == 'Active') {
          this.inputObject[element['date']] = element['active']['delta']
          this.chartColors[0].backgroundColor ='orange'
        }
      });
      
      this.barChartData[0].data =Object.values(this.inputObject)
      this.barChartLabels = Object.keys(this.inputObject)
    })
  }
  public barChartOptions: ChartOptions = {
    legend: {
      position: 'top',
      labels: {
        fontSize: 10,
        usePointStyle:true
      }
    },
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
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'white',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];


}