import { Component, OnInit } from '@angular/core';
import { COUNTRY_MAP_PATH } from '../../constants.js';
import * as d3 from 'd3';
import * as topojson from 'topojson';


@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.scss']
})
export class CountryMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(COUNTRY_MAP_PATH);
    this.getMapdata(COUNTRY_MAP_PATH)
    
  }

  
  async getMapdata(mapData){
    const data = await d3.json(mapData['India'].geoJSON);
    console.log(data)
    const topology = topojson.feature(
      data,
      data.objects['india']
    );
    
    
    let margin = { top: 50, left:50, right:50, bottom: 50},
    height = 900 - margin.top - margin.bottom,
    width = 800 - margin.left - margin.right
    
    console.log(data)
    console.log(data.objects['india'])
  
    

    let svg = d3.select('#map')
           .append("svg")
           .attr("height", height + margin.top + margin.bottom)
           .attr("width", width + margin.left + margin.right)
           .append("g")
           .attr("transform", "translate("+margin.left+ ","+margin.top+")");


    let projection = d3.geoMercator()
                  .translate([width/2, height/2])
                  //.scale(10)
    
projection.fitSize([700, 700], topology);
    let path = d3.geoPath()
            .projection(projection)
      

            svg
            .selectAll('.state')
            .data(topology.features)
            .enter().append("path")
            .attr('class','state')
            .attr("d", path)
            .attr("fill", 'white')
            
            .on('click', function (d) {
              alert(d['properties']['st_nm'])
              d3.select(this).classed("selected",true)
              d3.select(this).text("New");
            })
            .on('mouseover', function(d) {
              d3.select(this).classed("hovered",true)
            })
            .on('mouseout', function(d) {
              d3.select(this).classed("hovered",false)
            })

   
    
  }

}
