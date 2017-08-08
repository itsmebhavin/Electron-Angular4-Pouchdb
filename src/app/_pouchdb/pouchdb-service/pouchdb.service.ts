import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// the pouchdb-adapter file/class in the same folder
import { PouchDbAdapter } from './pouchdb-adapter';
import { ConfigService } from '../../config.service';

const REMOTE_COUCH_DB_ADDRESS = 'http://localhost:5984/';

@Injectable()
export class PouchdbService implements OnInit {

  // handler for the adapter class
  private _pouchDbAdapterRef: PouchDbAdapter;
  private _pouchDbAdapterCit: PouchDbAdapter;
  // rxjs observables to broadcast sync status
  syncStatus: Observable<boolean>;
  couchdbUp: Observable<boolean>;

  // URL of CouchDB (hardwired above)
  remoteCouchDBAddress = REMOTE_COUCH_DB_ADDRESS;
  remoteCouchCitationDBName = 'ufp_citationdata';
  remoteCouchReferenceDBName = 'ufp_referencedata';
  pouchDbDebugMode: boolean;
  // initiate adapter class and hook up the observables
  constructor(private config: ConfigService) {

    console.log('Debug Mode = ', this.pouchDbDebugMode);

    this.remoteCouchDBAddress = config.get('RemoteCouchDBUrl').toLowerCase();
    this.remoteCouchCitationDBName = config.get('RemoteCouchCitationDBName').toLowerCase();
    this.remoteCouchReferenceDBName = config.get('RemoteCouchReferenceDBName').toLowerCase();
    this.pouchDbDebugMode = config.get('PouchDBDebugMode');

    // Reference Data Setup
    // this._pouchDbAdapterRef = new PouchDbAdapter(this.remoteCouchDBAddress + '/' + this.remoteCouchReferenceDBName );
    // this.syncStatus = this._pouchDbAdapterRef.syncStatus.asObservable();
    // this.couchdbUp = this._pouchDbAdapterRef.couchDbUp.asObservable();

    // Citation Data Setup
    this._pouchDbAdapterCit = new PouchDbAdapter(this.remoteCouchDBAddress + this.remoteCouchCitationDBName, this.pouchDbDebugMode);
    this.syncStatus = this._pouchDbAdapterCit.syncStatus.asObservable();
    this.couchdbUp = this._pouchDbAdapterCit.couchDbUp.asObservable();
  }

  ngOnInit() {
  }

  getReferenceDocs(howmany: number): Promise<any> {
    return Promise.resolve(this._pouchDbAdapterRef.getDocs(howmany));
  }

  // wrapper for the get 20docs method in the adpater class
  getCitationDocs(howmany: number): Promise<any> {
    return Promise.resolve(this._pouchDbAdapterCit.getDocs(howmany));
  }

  post(doc): Promise<any> {
    return Promise.resolve(this._pouchDbAdapterCit.post(doc));
  }

}


