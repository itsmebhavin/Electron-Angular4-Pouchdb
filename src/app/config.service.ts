import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

export class Configuration {
    constructor(
        public ApplicationHeader: string,
        public SubHeader: string,
        public Copyright: string,
        public CopyrightYear: string,
        public DefaultTheme: string,
        public PouchDBDebugMode: boolean,
        public RemoteCouchDBUrl: string,
        public RemoteCouchCitationDBName: string,
        public RemoteCouchReferenceDBName: string,
    ) { }
}

@Injectable()
export class ConfigService {

    private _config: Configuration;
    constructor(private http: Http) {
    }
    load(url) {
        // json files will be loaded here
        return new Promise((resolve, reject) => {
            this.http.get(url)
                .map(res => res.json())
                .catch((error: any) => {
                    console.error(error);
                    return Observable.throw(error.json().error || 'Server error');
                })
                .subscribe((data) => {
                    this._config = data;
                    resolve(true);
                });
        });
    }
    get(key: any) {
        return this._config[key];
    }
}
