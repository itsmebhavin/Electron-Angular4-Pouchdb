import { Component, OnInit } from '@angular/core';
import { UserAgent } from '../../_services/useragent/useragent.model';
import { UserAgentService } from '../../_services/useragent/useragent.service';
import { ClockComponent } from '../clock/clock.component';
import { Config } from '../../app.config';
import { PouchdbService } from '../../_services/pouchdb-service/pouchdb.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    providers: [UserAgentService, Config]
})
export class FooterComponent implements OnInit {

    remoteCouchDBAddress: string;
    dataString: string;
    syncStatus: boolean;
    couchDbUp: boolean;
    appVersion: String = '';
    nodeVersion: String = '';
    nodeV8: String = '';
    userAgent: String = '';
    electron: String = '';
    environment: String = '';
    isElectronApp: Boolean = false;
    copyright: String = '';
    copyrightyear: String = '';
    constructor(private _config: Config, private _userAgentService: UserAgentService, private pouchdbservice: PouchdbService) {
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

        this.pouchdbservice.syncStatus.subscribe(result => {
            this.syncStatus = result;
        });
        this.pouchdbservice.couchdbUp.subscribe(result => {
            this.couchDbUp = result;
        });
        this.remoteCouchDBAddress = this.pouchdbservice.remoteCouchDBAddress;

        this._config.load().then((data: any) => {
            this.copyright = data.Copyright;
            this.copyrightyear = data.CopyrightYear;
        });
    }

    ngOnInit() {
    }

}
