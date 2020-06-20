import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {
  appRoot = environment.appRoot;
  allData: Object
  countrySlug: String
  confirmed: Number
  deltaConfirmed: Number
  deaths: Number
  deltaDeaths: Number
  recovered: Number
  deltaRecovered: Number
  active: Number
  deltaActive: Number

  constructor(private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit() {
    window.scrollTo(0, 0)
    this.countrySlug  = this.route.snapshot.params.country
    this.getTimeSeriesData()

  }


  async getTimeSeriesData() {
    let obs = this.http.get(this.appRoot+'/api/v0.1/analytics/count?scope=world&source='+this.countrySlug+'&duration=all')
    await obs.subscribe((res) => {
     console.log(res)
     this.allData = res[0]
     this.confirmed = this.allData['timeSeries'][this.allData['timeSeries'].length -1]['confirmed']['count']
     this.deltaConfirmed = this.allData['timeSeries'][this.allData['timeSeries'].length -1]['confirmed']['delta']
     this.deaths = this.allData['timeSeries'][this.allData['timeSeries'].length -1]['deaths']['count']
     this.deltaDeaths = this.allData['timeSeries'][this.allData['timeSeries'].length -1]['deaths']['delta']
     this.recovered = this.allData['timeSeries'][this.allData['timeSeries'].length -1]['recovered']['count']
     this.deltaRecovered = this.allData['timeSeries'][this.allData['timeSeries'].length -1]['recovered']['delta']
     this.active = this.allData['timeSeries'][this.allData['timeSeries'].length -1]['active']['count']
     this.deltaActive = this.allData['timeSeries'][this.allData['timeSeries'].length -1]['active']['delta']
    })
  }

}
