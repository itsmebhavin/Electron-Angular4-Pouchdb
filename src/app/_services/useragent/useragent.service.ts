import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, ReplaySubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { UserAgent } from './useragent.model';


declare var process;

@Injectable()
export class UserAgentService {

    appVersion = 'v1.0.0';
    nodeVersion = '8.2.1';
    nodeV8 = '5.8.283.41';
    _userAgent: UserAgent = new UserAgent();

    constructor() {

    }

    getCurrentUserAgentInformation() {
        this._userAgent.appVersion = this.appVersion;
        this._userAgent.nodeVersion = this.nodeVersion;
        this._userAgent.nodeV8 = this.nodeV8;

        this._userAgent.userAgent = window.navigator.userAgent;
        this._userAgent.isElectronApp = this._userAgent.userAgent.indexOf(this.appVersion.substring(1, (this.appVersion).length)) > 0;
        if (this._userAgent.isElectronApp) {
            this._userAgent.environment = 'Electron Desktop App';
        } else {
            this._userAgent.environment = 'Web App';
        }
        this._userAgent.electron = this._userAgent.userAgent.indexOf(this.appVersion.substring(1, (this.appVersion).length)) > 0
            ? process.versions.electron : '';

        return new Promise((resolve, reject) => {
            if (this._userAgent) {
                resolve(this._userAgent);
            } else {
                reject(null);
            }
        });
    }
}
