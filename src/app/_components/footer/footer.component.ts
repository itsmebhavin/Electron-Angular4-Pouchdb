import { Component, OnInit, OnChanges } from '@angular/core';
import { UserAgent } from '../../_services/useragent/useragent.model';
import { UserAgentService } from '../../_services/useragent/useragent.service';
import { ClockComponent } from '../clock/clock.component';
import { PouchdbService } from '../../_pouchdb/pouchdb-service/pouchdb.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    providers: [UserAgentService]
})
export class FooterComponent {

    remoteCouchDBAddress: string;
    dataString: string;
    syncStatusCit: boolean;
    couchDbUpCit: boolean;
    syncTextCit: any;
    appVersion: String = '';
    nodeVersion: String = '';
    nodeV8: String = '';
    userAgent: String = '';
    electron: String = '';
    environment: String = '';
    isElectronApp: Boolean = false;
    copyright: String = '';
    copyrightyear: String = '';

    constructor(private _userAgentService: UserAgentService, private pouchdbservice: PouchdbService) {
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

        PouchdbService.syncStatusCit.subscribe(result => {
            // console.log('footer-sync');
            // console.log(result);
            this.syncStatusCit = result;
		});
		
        PouchdbService.couchdbUpCit.subscribe(result => {
            // console.log('footer-couchup');
            // console.log(result);
            this.couchDbUpCit = result;
        });
        this.remoteCouchDBAddress = PouchdbService.remoteCouchDBAddress;

        // console.log(this._config.getConfiguration());
        this.copyright = environment.Copyright;
        this.copyrightyear =  environment.CopyrightYear;
    }
}
