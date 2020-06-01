import { Component, OnInit } from '@angular/core';
import { ResizeService } from '../size-detector/resize.service'
import { SCREEN_SIZE } from '../size-detector/screen-size.enum';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-predictions-analysis',
  templateUrl: './predictions-analysis.component.html',
  // //template: `<div style="margin-top:100px;"><h1>Hello {{size}}!</h1></div>
  //             <p>(0 = xs, 1 = sm, 2 = md, 3 = lg, 4 = xl)</p>`,
  styleUrls: ['./predictions-analysis.component.scss']
})
export class PredictionsAnalysisComponent implements OnInit{
  size: SCREEN_SIZE;
  constructor(private resizeSvc: ResizeService) { 
    this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        console.log('inside subscribe')
        this.size = x;
      });

  }
  ngOnInit() {
    this.size = 4;
  }


}
