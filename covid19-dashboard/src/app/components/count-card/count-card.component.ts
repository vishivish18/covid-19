import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss']
})
export class CountCardComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  testFunction(){
    console.log("make changes for develop branch to check actions")
  }

}
