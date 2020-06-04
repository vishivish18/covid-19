import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

//TODO: Implement interface


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input()
  allData: Object = {}
  
  
  dataSource
  displayedColumns
  name

  @Input()
  flag:String

  constructor (private updateSvc: DataService) {
    
  }

  ngOnInit() {
    this.parseAllData()
  }
  parseAllData () {
    console.log("parsing for",this.flag)
    let ELEMENT_DATA = []
    let indexOfArray = 1;
    for(let key in this.allData){
      if(this.allData.hasOwnProperty(key)){
        if(this.allData[key]['name'] !== this.flag ){
        let rowObj = {}
        rowObj['position'] = indexOfArray;
        rowObj['country'] = this.allData[key]['name']
        rowObj['confirmed'] = this.allData[key]['timeSeries']['confirmed']['count']
        rowObj['deltaConfirmed'] = this.allData[key]['timeSeries']['confirmed']['delta']
        rowObj['deaths'] = this.allData[key]['timeSeries']['deaths']['count']
        rowObj['deltaDeaths'] = this.allData[key]['timeSeries']['deaths']['delta']
        rowObj['recovered'] = this.allData[key]['timeSeries']['recovered']['count']
        rowObj['deltaRecovered'] = this.allData[key]['timeSeries']['recovered']['delta']
        rowObj['active'] = this.allData[key]['timeSeries']['active']['count']
        rowObj['deltaActive'] = this.allData[key]['timeSeries']['active']['delta']
        ELEMENT_DATA.push(rowObj)
        indexOfArray ++
        }
      }
    }
    if(this.flag == 'World') {
      this.name = 'Country'
    }else if(this.flag == 'US') {
      this.name = 'State/Other'
    }
    this.displayedColumns= ['position','name', 'confirmed', 'deaths','recovered','active'];
    this.dataSource = ELEMENT_DATA;
  }
}
