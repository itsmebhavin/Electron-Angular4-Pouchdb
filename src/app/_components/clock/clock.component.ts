
import {Component, Input, Attribute, OnInit} from '@angular/core';

@Component({
  selector: 'clock',
  template: `
      <p (updateTime)='updateMyTime()'>{{date | date: localformat}}</p>
    `
})
export class ClockComponent implements OnInit {
   private date;
  localformat: String;
     @Input()
     public format: String;

   constructor() {
     console.log('=========');
     console.log(this.format);

//    this.format = this.newformat;
    this.date =  new Date();
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }

  ngOnInit() {
     console.log('=========');
     console.log(this.format);
     this.localformat = this.format;
  }
}
