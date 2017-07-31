import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Config } from '../../app.config';

export interface NetworkStatus {
  internet?: boolean;
}

/**
 * NetworkNotifierService (Injectable) class -- Singleton (i.e. don't put this in your Component's list of providers!) service
 * that periodically pings the API to determine whether or not the network is still connected.
 * Subscribers are notified when the network status changes.
 */
@Injectable()
export class NetworkNotifierService {
    public networkAvailable$: ReplaySubject<NetworkStatus>;
    private internetStatusSource = new Subject<NetworkStatus>();
    private networkStatusSource: Observable<NetworkStatus>;
    apiUrl: string;
    constructor(  private config: Config ) {
        this.networkAvailable$ = this.networkStatusSource = new ReplaySubject<NetworkStatus>(1);

        Observable.combineLatest(this.internetStatusSource,
            (s1, s2) => Object.assign({}, s2, s1)
        ).subscribe(x => this.networkAvailable$.next(x));


        this.config.load().then(( config: any ) => {
            this.apiUrl = config.RemoteCouchDBUrl;
            setInterval(this.checkInternet.bind( this ), 15000);
            this.checkInternet();
        });
    }


    checkInternet() {
        this.internetStatusSource.next({ internet: navigator.onLine });
    }

}
