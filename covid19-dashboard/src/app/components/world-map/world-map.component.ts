import { Component, OnInit } from '@angular/core';
import { WORLD_MAP_PATH } from '../../constants.js';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { HttpClient } from '@angular/common/http';
import { scaleThreshold } from 'd3-scale';


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

  constructor(private http: HttpClient) {
     
  }
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
  getHeatMapColor(value){
    //console.log("here", value)
    var h = ((1.0 - value) * 240)
    //console.log("h is",h)
    let hslObj = {
      h:h,
      s:100,
      l:50
    }
    //console.log("hsl object is", hslObj)
    return hslObj
  }
   normalizeValues(value, min, max) {
    //console.log(value,min, max)
    let newvalue = (value - min)/(max - min)
    //console.log(newvalue)
    return this.getHeatMapColor(newvalue)
    
  }

  selectCountry(data) {
    this.selectedRegion = data['properties']['name']
    this.confirmed = this.allData[this.selectedRegion]['timesSeries'][0]['confirmed']['count']
    this.deltaConfirmed = this.allData[this.selectedRegion]['timesSeries'][0]['confirmed']['delta']
    this.deaths = this.allData[this.selectedRegion]['timesSeries'][0]['deaths']['count']
    this.deltaDeaths = this.allData[this.selectedRegion]['timesSeries'][0]['deaths']['delta']
    this.recovered = this.allData[this.selectedRegion]['timesSeries'][0]['recovered']['count']
    this.deltaRecovered = this.allData[this.selectedRegion]['timesSeries'][0]['recovered']['delta']
  }

  selectWorld() {
    this.selectedRegion = 'World'
    this.confirmed = this.allData['world']['timesSeries'][0]['confirmed']['count']
    this.deltaConfirmed = this.allData['world']['timesSeries'][0]['confirmed']['delta']
    this.deaths = this.allData['world']['timesSeries'][0]['deaths']['count']
    this.deltaDeaths = this.allData['world']['timesSeries'][0]['deaths']['delta']
    this.recovered = this.allData['world']['timesSeries'][0]['recovered']['count']
    this.deltaRecovered = this.allData['world']['timesSeries'][0]['recovered']['delta']
  }

  

  
  async getMapdata(mapData){
    const data = await d3.json(mapData['World'].geoJSON);
    const topology = topojson.feature(
      data,
      data.objects['countries']
    );
    
    
    let margin = { top: 50, left:50, right:50, bottom: 50},
    height = 650 - margin.top - margin.bottom,
    width = 1000 - margin.left - margin.right
    
    //console.log(data)
    //console.log(topology)
    // var allcountries=  []
    // console.log(typeof(topology))
    // topology.features.forEach((item)=>{
    //   allcountries.push(item['properties']['name'])
    // })
    // console.log(allcountries)
  
    

    let svg = d3.select('#worldmap')
           .append("svg")
           .attr("height", height + margin.top + margin.bottom)
           .attr("width", width + margin.left + margin.right)
           .append("g")
           .attr("transform", "translate("+margin.left+ ","+margin.top+")");


    let projection = d3.geoMercator()
                  .translate([width/2, height/2])
                  .scale(120)
    
projection.fitSize([900, 900], topology);

    let path = d3.geoPath()
            .projection(projection)
            let that = this

            svg
            .selectAll('.country')
            .data(topology.features)
            .enter().append("path")
            .attr('class','country')
            .attr("d", path)
           
            .attr("fill", function(d) {
              var countryName = d['properties']['name']
              if(countryName){
                if(that.allData[countryName]){
                  var confirmedForCountry = that.allData[countryName]['timesSeries'][0]['confirmed']['count']
                  let hsl = that.normalizeValues(confirmedForCountry, 100, 10000)
                  //console.log(hsl)
                  return d3.hsl(hsl.h, hsl.s, hsl.l)

                } else {
                  //console.log("prinint yellow",d)
                  return 'red'
                }
                
              }
            })

            .on('click', function (d) {
              //console.log(d['properties']['name'])
              d3.select(this).classed("selected",true)
              d3.select(this).text("New");
            })
            .on('mouseover', function(d) {
              that.selectCountry(d)
              
              d3.select(this).classed("hovered",true)
            })
            // .on('mouseover', (d) => {
            //   this.selectCountry(d)
            // })
            .on('mouseout', function(d) {
              that.selectWorld()
              d3.select(this).classed("hovered",false)
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
