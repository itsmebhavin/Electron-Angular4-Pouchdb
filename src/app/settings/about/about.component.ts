import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { UserAgent } from '../../_services/useragent/useragent.model';
import { UserAgentService } from '../../_services/useragent/useragent.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  copyright = '';
    copyrightyear = '';
    applicationheader = '';
    contactus = '';
    subheader = '';

    appVersion = '';
    nodeVersion = '';
    nodeV8 = '';
    userAgent = '';
    electron = '';
    environment = '';
    isElectronApp = false;

  constructor(private _config: ConfigService, private _userAgentService: UserAgentService) {
    this.applicationheader = _config.get('ApplicationHeader');
    this.subheader = _config.get('SubHeader');
    this.copyright = _config.get('Copyright');
    this.copyrightyear = _config.get('CopyrightYear');
    this.contactus = _config.get('ContactUs');

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
