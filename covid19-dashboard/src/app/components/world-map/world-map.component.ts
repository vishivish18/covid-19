import { Component,OnInit } from '@angular/core';
import { WORLD_MAP_PATH } from '../../constants.js';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
  selectedRegion = 'World'
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


  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getAllCountryData()
  }
  async getAllCountryData() {
    let obs = this.http.get('http://localhost:3112/api/v0.1/analytics/count?source=all&duration=latest')
    await obs.subscribe((res) => {
      this.allData = res
      this.getMapdata(WORLD_MAP_PATH)
      this.selectWorld()
      
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
      case value > 0 && value <= 5:
        return '#cfe1f2'
      case value > 5 && value <= 50:
        return '#4a97c9'
      case value > 50 && value <= 75:
        return '#F9812A'
      case value > 75 && value <= 100:
        return '#FC6600'
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

  // getHeatMapColor(value) {
  //   switch (true) {
  //     // Blue
  //     case value >= 0 && value <= 6.25:
  //       return '#cfe1f2'
  //     case value > 6.25 && value <= 12.5:
  //       return '#93c4de'
  //     case value > 12.5 && value <= 18.75:
  //       return '#4a97c9'
  //     case value > 18.75 && value <= 25:
  //       return '#1764ab'
  //       // Green
  //     case value > 25 && value <= 31.25:
  //       return '#d3edcc'
  //     case value > 31.25 && value <= 37.5:
  //       return '#98d493'
  //     case value > 37.5 && value <= 43.75:
  //       return '#4bb061'
  //     case value > 43.75 && value <= 50:
  //       return '#157e3a'
  //       //Orange
  //     case value > 50 && value <= 56.25:
  //       return '#FFBF00'
  //     case value > 56.25 && value <= 62.5:
  //       return '#F9A602'
  //     case value > 62.5 && value <= 68.75:
  //       return '#F9812A'
  //     case value > 68.75 && value <= 75:
  //       return '#FC6600'
  //       //Red
  //     case value > 75 && value <= 81.25:
  //       return '#fcc9b4'
  //     case value > 81.25 && value <= 87.5:
  //       return '#fb8a6a'
  //     case value > 87.5 && value <= 93.75:
  //       return '#f14431'
  //     case value > 93.75 && value <= 100:
  //       return '#bb141a'
  //     default:
  //       return
  //   }
  // }
  normalizeValues(countryName, value, min, max) {
    let maxRange = 100
    let minRange = 1
    let newvalue = (maxRange - minRange) / (max - min) * (value - max) + maxRange
    console.log("Normalized for ",countryName, "is value ",newvalue )
    return this.getHeatMapColor(newvalue)

  }

  selectCountry(data) {
    this.selectedRegion = data['properties']['name']    
    this.confirmed = this.allData[this.selectedRegion]['timeSeries']['confirmed']['count']
    this.deltaConfirmed = this.allData[this.selectedRegion]['timeSeries']['confirmed']['delta']
    this.deaths = this.allData[this.selectedRegion]['timeSeries']['deaths']['count']
    this.deltaDeaths = this.allData[this.selectedRegion]['timeSeries']['deaths']['delta']
    this.recovered = this.allData[this.selectedRegion]['timeSeries']['recovered']['count']
    this.deltaRecovered = this.allData[this.selectedRegion]['timeSeries']['recovered']['delta']
    this.active = this.allData[this.selectedRegion]['timeSeries']['active']['count']
    this.deltaActive = this.allData[this.selectedRegion]['timeSeries']['active']['delta']
  }

  selectWorld() {
    this.selectedRegion = 'World'
    this.confirmed = this.allData['World']['timeSeries']['confirmed']['count']
    this.deltaConfirmed = this.allData['World']['timeSeries']['confirmed']['delta']
    this.deaths = this.allData['World']['timeSeries']['deaths']['count']
    this.deltaDeaths = this.allData['World']['timeSeries']['deaths']['delta']
    this.recovered = this.allData['World']['timeSeries']['recovered']['count']
    this.deltaRecovered = this.allData['World']['timeSeries']['recovered']['delta']
    this.active = this.allData['World']['timeSeries']['active']['count']
    this.deltaActive = this.allData['World']['timeSeries']['active']['delta']
  }




  async getMapdata(mapData) {
    const data = await d3.json(mapData['World'].geoJSON);
    const topology = topojson.feature(
      data,
      data.objects['countries']
    );
    let margin = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50
      },
      height = 650 - margin.top - margin.bottom,
      width = 1000 - margin.left - margin.right


    let svg = d3.select('#worldmap')
      .append("svg")
      .attr("height", height + margin.top + margin.bottom)
      .attr("width", width + margin.left + margin.right)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    let projection = d3.geoMercator()
      .translate([width / 2, height / 2])
      .scale(120)

    projection.fitSize([900, 900], topology);

    let path = d3.geoPath()
      .projection(projection)
    let that = this

    svg
      .selectAll('.country')
      .data(topology.features)
      .enter().append("path")
      .attr('class', 'country')
      .attr("d", path)

      .attr("fill", function (d) {
        var countryName = d['properties']['name']
        if (countryName) {
          if (that.allData[countryName]) {
            var confirmedForCountry = that.allData[countryName]['timeSeries']['confirmed']['count']
            // let hsl = that.normalizeValues(countryName,confirmedForCountry, 0, 200000)
            // //console.log(hsl)
            // return d3.hsl(hsl.h, hsl.s, hsl.l)
            let colorCode = that.normalizeValues( countryName, confirmedForCountry, 0, 1800000)
            return colorCode
          } else {
            //console.log("prinint yellow",d)
            return 'white'
          }
        }
      })

      .on('click', function (d) {
        //console.log(d['properties']['name'])
        d3.select(this).classed("selected", true)
        d3.select(this).text("New");
      })
      
      .on('mouseover', function (d) {
        that.selectCountry(d)
        d3.select(this).classed("hovered", true)
      })
      // .on('mouseover', (d) => {
      //   this.selectCountry(d)
      // })
      .on('mouseout', function (d) {
        that.selectWorld()
        d3.select(this).classed("hovered", false)
      })

    // svg.selectAll(".country-label")
    //   .data(topology.features)
    //   .enter().append("text")
    //   .attr("x", function(d) {
    //     var coords  = projection(d['geometry']['coordinates'][0][0][0], d['geometry']['coordinates'][0][0][1])
    //     return coords[0]
    //   })
    //   .attr("y", function(d) {
    //     var coords  = projection(d['geometry']['coordinates'][0][0][0], d['geometry']['coordinates'][0][0][1])
    //     return coords[1]
    //   })
    //   .text(function (d) {
    //     return d['properties']['name']
    //   })
  }

}
