import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  country: string;
  position: number;
  confirmed: number;
  deaths: number;
  recovered: number;
  active: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 2, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 3, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 4, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 5, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 6, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 7, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 8, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 9, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 10, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 },
  {position: 11, country: 'USA', confirmed: 200, deaths: 200, recovered: 200, active: 200 }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  displayedColumns: string[] = ['position', 'country', 'confirmed', 'deaths','recovered','active'];
  dataSource = ELEMENT_DATA;
}
