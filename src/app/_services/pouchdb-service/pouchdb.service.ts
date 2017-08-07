import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// the pouchdb-adapter file/class in the same folder
import { PouchDbAdapter } from './pouchdb-adapter';
import { Config } from '../../app.config';

const REMOTE_COUCH_DB_ADDRESS = 'http://localhost:5984/sandbox';

@Injectable()
export class PouchdbService implements OnInit {

  // handler for the adapter class
  private _pouchDbAdapter: PouchDbAdapter;

  // rxjs observables to broadcast sync status
  syncStatus: Observable<boolean>;
  couchdbUp: Observable<boolean>;

  // URL of CouchDB (hardwired above)
  remoteCouchDBAddress = REMOTE_COUCH_DB_ADDRESS;

  // initiate adapter class and hook up the observables
  constructor(private _config: Config) {

    this._pouchDbAdapter = new PouchDbAdapter(this.remoteCouchDBAddress);
    this.syncStatus = this._pouchDbAdapter.syncStatus.asObservable();
    this.couchdbUp = this._pouchDbAdapter.couchDbUp.asObservable();
  }

  ngOnInit() {
    this._config.load().then((config: any) => {
      this.remoteCouchDBAddress = config.RemoteCouchDBUrl.toLowerCase();
    });
  }
  // wrapper for the get 20docs method in the adpater class
  get20Docs(): Promise<any> {
    return Promise.resolve(this._pouchDbAdapter.get20Docs());
  }

  post(doc): Promise<any> {
    return Promise.resolve(this._pouchDbAdapter.post(doc));
  }

}


