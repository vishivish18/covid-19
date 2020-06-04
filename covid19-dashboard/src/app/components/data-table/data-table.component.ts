import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

//TODO: Implement interface
const ELEMENT_DATA = [];


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input()
  allData: Object = {}

  @Input()
  flag:String

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes)
    console.log("ng on changes called",this.flag)
    this.allData = changes['allData']['currentValue']
    this.parseAllData()
    
    
  }
  ngOnInit() {
    this.allData = {}
    
  }
  parseAllData () {
    console.log("parsing for",this.flag)
    ELEMENT_DATA
    let indexOfArray = 1;
    for(let key in this.allData){
      if(this.allData.hasOwnProperty(key)){
        if(this.allData[key]['name'] !== this.flag ){
        let countryObj = {}
        countryObj['position'] = indexOfArray;
        countryObj['country'] = this.allData[key]['name']
        countryObj['confirmed'] = this.allData[key]['timeSeries']['confirmed']['count']
        countryObj['deltaConfirmed'] = this.allData[key]['timeSeries']['confirmed']['delta']
        countryObj['deaths'] = this.allData[key]['timeSeries']['deaths']['count']
        countryObj['deltaDeaths'] = this.allData[key]['timeSeries']['deaths']['delta']
        countryObj['recovered'] = this.allData[key]['timeSeries']['recovered']['count']
        countryObj['deltaRecovered'] = this.allData[key]['timeSeries']['recovered']['delta']
        countryObj['active'] = this.allData[key]['timeSeries']['active']['count']
        countryObj['deltaActive'] = this.allData[key]['timeSeries']['active']['delta']
        ELEMENT_DATA.push(countryObj)
        indexOfArray ++
        }
      }
    }
  }
  displayedColumns: string[] = ['position','country', 'confirmed', 'deaths','recovered','active'];
  dataSource = ELEMENT_DATA;
}
