import { Component, OnInit, Input } from '@angular/core';

//TODO: Implement interface
const ELEMENT_DATA = [];


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input()
  allCountryData: Object


  ngOnInit() {
    this.parseAllData()
  }
  parseAllData () {
    ELEMENT_DATA
    let indexOfArray = 1;
    for(let key in this.allCountryData){
      if(this.allCountryData.hasOwnProperty(key)){
        if(this.allCountryData[key]['name'] !== 'World'){
        let countryObj = {}
        countryObj['position'] = indexOfArray;
        countryObj['country'] = this.allCountryData[key]['name']
        countryObj['confirmed'] = this.allCountryData[key]['timeSeries']['confirmed']['count']
        countryObj['deltaConfirmed'] = this.allCountryData[key]['timeSeries']['confirmed']['delta']
        countryObj['deaths'] = this.allCountryData[key]['timeSeries']['deaths']['count']
        countryObj['deltaDeaths'] = this.allCountryData[key]['timeSeries']['deaths']['delta']
        countryObj['recovered'] = this.allCountryData[key]['timeSeries']['recovered']['count']
        countryObj['deltaRecovered'] = this.allCountryData[key]['timeSeries']['recovered']['delta']
        countryObj['active'] = this.allCountryData[key]['timeSeries']['active']['count']
        countryObj['deltaActive'] = this.allCountryData[key]['timeSeries']['active']['delta']
        ELEMENT_DATA.push(countryObj)
        indexOfArray ++
        }
      }
    }
  }
  displayedColumns: string[] = ['position','country', 'confirmed', 'deaths','recovered','active'];
  dataSource = ELEMENT_DATA;
}
