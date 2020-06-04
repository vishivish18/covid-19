import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataChangeEvent = new Subject<any[]>();
  constructor() { }

  updateData(data){
    console.log(data)
    this.dataChangeEvent.next(data)

  }
}
