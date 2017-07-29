import { Component, OnInit } from '@angular/core';
import { UserAgent } from '../../_services/useragent/useragent.model';
import { UserAgentService } from '../../_services/useragent/useragent.service';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [UserAgentService]
})
export class FooterComponent implements OnInit {

  appVersion: String = '';
  nodeVersion: String = '';
  nodeV8: String = '';
  userAgent: String = '';
  electron: String = '';
  environment: String = '';
  isElectronApp: Boolean = false;

  constructor(private _userAgentService: UserAgentService) {
    _userAgentService.getCurrentUserAgentInformation().then((res: UserAgent) => {
            this.appVersion = res.appVersion;
            this.nodeVersion = res.nodeVersion;
            this.nodeV8 = res.nodeV8;
            this.environment = res.environment;
            this.userAgent = res.userAgent;
            this.isElectronApp = res.userAgent.indexOf(res.appVersion.substring(1, (res.appVersion).length)) > 0;
            if (this.isElectronApp) {
                this.environment = 'Electron Desktop App';
            } else {
                this.environment = 'Web App';
            }
        });
  }

  ngOnInit() {
  }

}
