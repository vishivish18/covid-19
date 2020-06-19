import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component'
import { CountryMapComponent } from './components/country-map/country-map.component'
import { CountryPageComponent } from './components/country-page/country-page.component'
import { CountCardComponent } from './components/count-card/count-card.component'
import { WorldMapComponent } from './components/world-map/world-map.component'
import { UsaMapComponent } from './components/usa-map/usa-map.component'
import { WhoComponent } from './components/who/who.component'
import { PredictionsAnalysisComponent } from './components/predictions-analysis/predictions-analysis.component'
import { AboutComponent } from './components/about/about.component'
const routes: Routes = [
  { path: '', redirectTo: '/world', pathMatch: 'full' },
  { path: 'india', component: CountryMapComponent, children: [
    { path: 'card', component: CountCardComponent }
  ] },
  { path: 'world', component: WorldMapComponent, children: [
    
  ] },
  { path: 'world/:country', component: CountryPageComponent, children: [] },
  { path: 'usa', component: UsaMapComponent, children: [] },
  { path: 'who', component: WhoComponent},
  { path: 'predictions-and-analysis', component: PredictionsAnalysisComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
