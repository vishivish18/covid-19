import { Component, OnInit } from '@angular/core';
import { COUNTRY_MAP_PATH } from '../../constants.js';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResizeService } from '../size-detector/resize.service'
import { SCREEN_SIZE } from '../size-detector/screen-size.enum';
import { delay } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service.js';


@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.scss']
})
export class CountryMapComponent implements OnInit {

  selectedRegion = 'India'
  allData: Object
  confirmed: Number
  deltaConfirmed: Number
  deaths: Number
  deltaDeaths: Number
  recovered: Number
  deltaRecovered: Number
  active: Number
  deltaActive: Number
  updatedAt: String
  appRoot = environment.appRoot;
  innerWidth:any
  innerHeight:any
  size: SCREEN_SIZE;
  constructor(private resizeSvc: ResizeService, private http: HttpClient, private updateSvc: DataService) { 
    this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        this.size = x;
        this.innerWidth = window.innerWidth
        this.innerHeight = window.innerHeight      
      });

  }


  ngOnInit() {
    this.getAllStatesData()
    this.innerWidth = window.innerWidth
    this.innerHeight = window.innerHeight
    
  }

  async getAllStatesData() {
    let obs = this.http.get(this.appRoot+'/api/v0.1/analytics/count?scope=india&source=all&duration=latest')
    await obs.subscribe((res) => {
      this.allData = res
      this.updateSvc.updateData(this.allData)
      this.getMapdata(COUNTRY_MAP_PATH)
      this.selectCountry()
      
    })
  }

  getHeatMapColor(value) {
    switch (true) {
      // // Blue
      // case value >= 0 && value <= 6.25:
      //   return '#cfe1f2'
      // case value > 6.25 && value <= 12.5:
      //   return '#93c4de'
      // case value > 12.5 && value <= 18.75:
      //   return '#4a97c9'
      // case value > 18.75 && value <= 25:
      //   return '#1764ab'
      //   // Green
      // case value > 25 && value <= 31.25:
      //   return '#d3edcc'
      // case value > 31.25 && value <= 37.5:
      //   return '#98d493'
      // case value > 37.5 && value <= 43.75:
      //   return '#4bb061'
      // case value > 43.75 && value <= 50:
      //   return '#157e3a'
        //Orange
        // cfe1f2
        // 93c4de
        // 4a97c9
        // 1764ab

      //light #e1ecf7
      // #cbdef0
      // #abcfe5
      // #81badb
      // #58a1ce
      // #3786c0
      // #1a69ae
      // #094c96

      case value > 0 && value <= 1.1:
        return '#e1ecf7'
      case value > 1.1 && value <= 2:
        return '#cbdef0'
      case value > 2 && value <= 5:
        return '#81badb'
      case value > 5 && value <= 7:
        return '#58a1ce'
      case value > 7 && value <= 10:
        return '#3786c0'
      case value > 10 && value <= 15:
        return '#1764ab'
      case value > 15 && value <= 30:
        return '#1a69ae'
      case value > 30 && value <= 60:
        return '#094c96'
      case value > 60 && value <=80:
        return '#fb8a6a'
      case value > 80 && value <= 95:
        return '#073b7d'
      case value > 75 && value <= 100:
        return '#bb141a'

      // case value > 0 && value <= 1.1:
      //   return '#d3edcc'
      // case value > 1.1 && value <= 3:
      //   return '#98d493'
      // case value > 5 && value <= 10:
      //   return '#4a97c9'
      // case value > 10 && value <= 15:
      //   return '#1764ab'
      // case value > 30 && value <= 60:
      //   return '#1764ab'
      // case value > 60 && value <=80:
      //   return '#fb8a6a'
      // case value > 80 && value <= 95:
      //   return '#f14431'
      // case value > 75 && value <= 100:
      //   return '#bb141a'
        //Red
      // case value > 75 && value <= 81.25:
      //   return '#fcc9b4'
      // case value > 81.25 && value <= 87.5:
      //   return '#fb8a6a'
      // case value > 87.5 && value <= 93.75:
      //   return '#f14431'
      // case value > 93.75 && value <= 100:
      //   return '#bb141a'
      default:
        return
    }
  }

  normalizeValues(countryName, value, min, max) {
    let maxRange = 100
    let minRange = 1
    let newvalue = (maxRange - minRange) / (max - min) * (value - max) + maxRange
    return this.getHeatMapColor(newvalue)

  }

  selectState(data) {
    this.selectedRegion = data['properties']['st_nm']    
    this.confirmed = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['confirmed']['count'] : 'N/A'
    this.deltaConfirmed = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['confirmed']['delta'] : 'N/A'
    this.deaths = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['deaths']['count'] : 'N/A'
    this.deltaDeaths = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['deaths']['delta'] : 'N/A'
    this.recovered = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['recovered']['count'] : 'N/A'
    this.deltaRecovered = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['recovered']['delta'] : 'N/A'
    this.active = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['active']['count'] : 'N/A'
    this.deltaActive = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['active']['delta'] : 'N/A'
  }

  selectCountry() {
    this.selectedRegion = 'India'
    this.confirmed = this.allData['India']['timeSeries'][0]['confirmed']['count']
    this.deltaConfirmed = this.allData['India']['timeSeries'][0]['confirmed']['delta']
    this.deaths = this.allData['India']['timeSeries'][0]['deaths']['count']
    this.deltaDeaths = this.allData['India']['timeSeries'][0]['deaths']['delta']
    this.recovered = this.allData['India']['timeSeries'][0]['recovered']['count']
    this.deltaRecovered = this.allData['India']['timeSeries'][0]['recovered']['delta']
    this.active = this.allData['India']['timeSeries'][0]['active']['count']
    this.deltaActive = this.allData['India']['timeSeries'][0]['active']['delta']
  }
  
  async getMapdata(mapData){
    const data = await d3.json(mapData['India'].geoJSON);
    console.log(data)
    const topology = topojson.feature(
      data,
      data.objects['india']
    );
    
    
    let margin = { top: 50, left:50, right:50, bottom: 50}
    let height = (2/3) * this.innerWidth
    let width = (2/3) * this.innerWidth
    height = height - margin.top - margin.bottom
    width = width - margin.left - margin.right
    
    console.log(data)
    console.log(data.objects['india'])
  
    

    let svg = d3.select('#map')
           .append("svg")
           .attr("height", height + margin.top + margin.bottom)
           .attr("width", width + margin.left + margin.right)
           .append("g")
           .attr("transform", "translate("+margin.left+ ","+margin.top+")");


    let projection = d3.geoMercator()
                  //.translate([width/2, height/2])
                  //.scale(10)
    
projection.fitSize([height-350, width-350], topology);
    let path = d3.geoPath()
            .projection(projection)
            let that = this

            svg
            .selectAll('.state')
            .data(topology.features)
            .enter().append("path")
            .attr('class','state')
            .attr("d", path)
            .attr("fill", function (d) {
              var stateName = d['properties']['st_nm']
              if (stateName) {
                if (that.allData[stateName]) {
                  var confirmedForState = that.allData[stateName]['timeSeries']['confirmed']['count']
                  // let hsl = that.normalizeValues(stateName,confirmedForCountry, 0, 200000)
                  // //console.log(hsl)
                  // return d3.hsl(hsl.h, hsl.s, hsl.l)
                  let colorCode = that.normalizeValues( stateName, confirmedForState, 0, 300000)
                  return colorCode
                } else {
                  return 'yellow'
                }
              }
            })
            
            
            .on('click', function (d) {
              //d3.select(this).classed("selected",true)
              d3.select(this).text("New");
            })
            .on('mouseover', function(d) {
              that.selectState(d)
              d3.select(this).classed("hovered",true)
            })
            .on('mouseout', function(d) {
              that.selectCountry()
              d3.select(this).classed("hovered",false)
            })

   
    
  }

}
