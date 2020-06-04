import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

//TODO: Implement interface
const ELEMENT_DATA = [];


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  
  @Input()
  allData: Object = {}

  @Input()
  flag:String
  constructor (private updateSvc: DataService) {
    
  }

  ngOnInit() {
    this.parseAllData()

  }


  parseAllData () {
    console.log("PARSING DATA")
    this.updateSvc.dataChangeEvent.subscribe((data)=>{
      console.log(data)
      this.allData = data
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
    })
  }
  displayedColumns: string[] = ['position','country', 'confirmed', 'deaths','recovered','active'];
  dataSource = ELEMENT_DATA;
}
