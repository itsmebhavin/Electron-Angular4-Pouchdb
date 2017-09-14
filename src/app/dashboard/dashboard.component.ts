import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from '../../environments/environment.prod';
import { UserAgent } from '../_services/useragent/useragent.model';
import { UserAgentService } from '../_services/useragent/useragent.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  // Doughnut
  public doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  applicationheader: string;
  subheader: string;
  isElectronApp = false;

  constructor(private _router: Router, private _userAgentService: UserAgentService) {
    this.applicationheader = environment.ApplicationHeader;
    this.subheader = environment.SubHeader;
    _userAgentService.getCurrentUserAgentInformation().then((res: UserAgent) => {
      this.isElectronApp = res.userAgent.indexOf(res.appVersion.substring(1, (res.appVersion).length)) > 0;
    });
  }

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
