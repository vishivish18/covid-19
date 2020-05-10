import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss']
})
export class CountCardComponent implements OnInit {

  @Input()
  cardTitle: String

  @Input()
  totalCount: Number

  @Input()
  deltaCount: Number


  
  constructor() { }
  ngOnInit() {

  }

}
