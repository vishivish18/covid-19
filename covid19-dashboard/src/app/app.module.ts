import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountCardComponent } from './components/count-card/count-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CountryMapComponent } from './components/country-map/country-map.component';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { UsaMapComponent } from './components/usa-map/usa-map.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatTableModule } from '@angular/material';
import { WhoComponent } from './components/who/who.component';
import { PredictionsAnalysisComponent } from './components/predictions-analysis/predictions-analysis.component'  
import { SizeDetectorComponent } from './components/size-detector/size-detector.component'
import { ResizeService } from './components/size-detector/resize.service';
import { AboutComponent } from './components/about/about.component';
import { LineChartComponent } from './components/line-chart/line-chart.component'
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { CountryPageComponent } from './components/country-page/country-page.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountCardComponent,
    CountryMapComponent,
    WorldMapComponent,
    UsaMapComponent,
    DataTableComponent,
    WhoComponent,
    PredictionsAnalysisComponent,
    SizeDetectorComponent,
    AboutComponent,
    LineChartComponent,
    BarChartComponent,
    CountryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
