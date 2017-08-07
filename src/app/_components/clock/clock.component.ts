
import {Component, Input, Attribute, OnInit} from '@angular/core';

@Component({
  selector: 'clock',
  template: `
      <span style="font-size:12px" (updateTime)='updateMyTime()'>{{date | date: localformat}}</span>
    `
})
export class ClockComponent implements OnInit {
  private date;
  localformat: String;
  @Input('format')
  public format: String;

  constructor() {
    this.date =  new Date();
    setInterval(() => {
        this.date =  new Date();
      }, 1000);
  }

  ngOnInit() {
    this.localformat = this.format;
    this.date =  new Date();
  }
}
