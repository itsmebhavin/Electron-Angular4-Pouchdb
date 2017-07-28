import { Component, OnInit } from '@angular/core';
import { UserAgentService } from '../_services/useragent/useragent.service';
import { UserAgent } from '../_services/useragent/useragent.model';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isElectronApp: boolean = false;
  constructor(private _userAgentService: UserAgentService) {
    _userAgentService.getCurrentUserAgentInformation().then((res: UserAgent) => {
            this.isElectronApp = res.isElectronApp;
        });
  }

  ngOnInit() {
  }

}
