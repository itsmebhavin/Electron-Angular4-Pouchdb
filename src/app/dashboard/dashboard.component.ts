import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() addViolationNotice = new EventEmitter<any>();
  @Output() addOverloadCitation = new EventEmitter<any>();
  @Output() addUserDetail = new EventEmitter<any>();
  // Doughnut
  public doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  constructor(private _router: Router) { }

  ngOnInit() {
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  goto(routerPath) {
    console.log(routerPath);
    this._router.navigate(['/layout/' + routerPath]);
  }

}
