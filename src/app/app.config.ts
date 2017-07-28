import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Config {

    private static configStream: Observable<any>;
    public configStream: Observable<any>;

    constructor(private http: Http) {
        if(!Config.configStream){
            Config.configStream = this.http.get("config/app.config.json")
                .map(res => res.json())
                //.share();
                .publishReplay(1)
                .refCount();
        }
        this.configStream = Config.configStream;
    }
    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            Config.configStream
                .subscribe((data) => {
                    resolve(data);
                });
        });
    }
};
