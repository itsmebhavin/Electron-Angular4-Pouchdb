import { Component, OnInit } from '@angular/core';
import {Config} from '../../app.config';
import { UserAgent } from '../../_services/useragent/useragent.model';
import { UserAgentService } from '../../_services/useragent/useragent.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [Config, UserAgentService]
})
export class HeaderComponent implements OnInit {

  title: String = '';
  appVersion: String = '';
  nodeVersion: String = '';
  nodeV8: String = '';
  userAgent: String = '';
  electron: String = '';
  environment: String = '';
  isElectronApp: Boolean = false;

  constructor(private _config: Config,
              private _userAgentService: UserAgentService) {
        this._config.load().then(( data: any ) => {
            document.title = document.title.replace(/Loading(\.\.\.)?/, data.ApplicationHeader);
            this.title =  data.ApplicationHeader;
        });

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
