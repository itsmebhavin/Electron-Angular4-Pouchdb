import { Component, OnInit } from '@angular/core';
import { UserAgent } from '../../_services/useragent/useragent.model';
import { UserAgentService } from '../../_services/useragent/useragent.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [UserAgentService]
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

    constructor(
        private _userAgentService: UserAgentService) {
        document.title = document.title.replace(/Loading(\.\.\.)?/, environment.ApplicationHeader);
        this.title = environment.ApplicationHeader;

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
