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
    console.log(this.allCountryData)
    let indexOfArray = 1;
    for(let key in this.allCountryData){
      if(this.allCountryData.hasOwnProperty(key)){
        let countryObj = {}
        countryObj['position'] = indexOfArray;
        countryObj['country'] = this.allCountryData[key]['name']
        countryObj['confirmed'] = this.allCountryData[key]['timesSeries'][0]['confirmed']['count']
        countryObj['deaths'] = this.allCountryData[key]['timesSeries'][0]['deaths']['count']
        countryObj['recovered'] = this.allCountryData[key]['timesSeries'][0]['recovered']['count']
        countryObj['active'] = this.allCountryData[key]['timesSeries'][0]['active']['count']
        console.log(this.allCountryData[key])
        ELEMENT_DATA.push(countryObj)
        indexOfArray ++
      }
    }
  }
  displayedColumns: string[] = ['position','country', 'confirmed', 'deaths','recovered','active'];
  dataSource = ELEMENT_DATA;
}
