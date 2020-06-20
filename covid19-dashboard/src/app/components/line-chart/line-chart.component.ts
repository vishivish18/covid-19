import * as d3 from 'd3';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
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

  }


  async getTimeSeriesData() {
    let obs = this.http.get(this.appRoot+'/api/v0.1/analytics/count?scope=world&source='+this.source+'&duration=all')
    await obs.subscribe((res) => {
      this.allData = res[0]
      this.timeSeries = this.allData['timeSeries']
      this.timeSeries.forEach(element => {
        element['date'] = new Date(element['date']).toLocaleDateString()
        if(this.type == 'Confirmed') {
          this.inputObject[element['date']] = element['confirmed']['count']
          this.lineChartColors[0].backgroundColor = ''
          this.lineChartColors[0].pointBackgroundColor = 'blue'
        }else if(this.type == 'Deaths') {
          this.inputObject[element['date']] = element['deaths']['count']
          this.lineChartColors[0].backgroundColor = ''
          this.lineChartColors[0].pointBackgroundColor = 'red'
        }else if(this.type == 'Recovered') {
          this.inputObject[element['date']] = element['recovered']['count']
          this.lineChartColors[0].backgroundColor = ''
          this.lineChartColors[0].pointBackgroundColor = 'green'
        }else if(this.type == 'Active') {
          this.inputObject[element['date']] = element['active']['count']
          this.lineChartColors[0].backgroundColor = ''
          this.lineChartColors[0].pointBackgroundColor = 'orange'
        }
      });
      //console.log(this.inputObject)
      //console.log(Object.values(this.inputObject))
      this.lineChartData[0].data =Object.values(this.inputObject)
      this.lineChartLabels = Object.keys(this.inputObject)
    })
  }


  
  public lineChartData: ChartDataSets[] = [
     { data: [], label: 'Overall Growth' }
     
  ];
  public lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    legend: {
      position: 'top',
      labels: {
        fontSize: 10,
        usePointStyle:true
      }
    },
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        // {
        //   id: 'y-axis-1',
        //   position: 'right',
        //   gridLines: {
        //     color: 'rgba(255,0,0,0.3)',
        //   },
        //   ticks: {
        //     fontColor: 'red',
        //   }
        // }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: '',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'white',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }


  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }
  




  createGraph() {
  

  }
   
}
