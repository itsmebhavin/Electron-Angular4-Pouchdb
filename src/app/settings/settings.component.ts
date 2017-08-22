import { Component, OnInit } from '@angular/core';
import { UserAgentService } from '../_services/useragent/useragent.service';
import { UserAgent } from '../_services/useragent/useragent.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  isElectronApp: boolean;

  constructor(_userAgentService: UserAgentService) {
    _userAgentService.getCurrentUserAgentInformation().then((res: UserAgent) => {
      this.isElectronApp = res.userAgent.indexOf(res.appVersion.substring(1, (res.appVersion).length)) > 0;
    });
  }
}



