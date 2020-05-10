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
import { MatTableModule } from '@angular/material'  


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountCardComponent,
    CountryMapComponent,
    WorldMapComponent,
    UsaMapComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
