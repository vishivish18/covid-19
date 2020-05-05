import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountCardComponent } from './components/count-card/count-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CountryMapComponent } from './components/country-map/country-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountCardComponent,
    CountryMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
