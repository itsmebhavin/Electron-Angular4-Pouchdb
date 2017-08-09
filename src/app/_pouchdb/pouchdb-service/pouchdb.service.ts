import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// the pouchdb-adapter file/class in the same folder
import { PouchDbAdapterCitation, PouchDbAdapterReference } from './pouchdb-adapter';
import { ConfigService } from '../../config.service';

const REMOTE_COUCH_DB_ADDRESS = 'http://localhost:5984/';

@Injectable()
export class PouchdbService implements OnInit {

  // handler for the adapter class
  private _pouchDbAdapterRef: PouchDbAdapterReference;
  private _pouchDbAdapterCit: PouchDbAdapterCitation;
  // rxjs observables to broadcast sync status
  syncStatusRef: Observable<boolean>;
  couchdbUpRef: Observable<boolean>;

  syncStatusCit: Observable<boolean>;
  couchdbUpCit: Observable<boolean>;

  // URL of CouchDB (hardwired above)
  remoteCouchDBAddress = REMOTE_COUCH_DB_ADDRESS;
  remoteCouchCitationDBName = 'ufp_citationdata';
  remoteCouchReferenceDBName = 'ufp_referencedata';
  pouchDbDebugMode: boolean;
  // initiate adapter class and hook up the observables
  constructor(private config: ConfigService) {

    // Reference Data Setup
    this._pouchDbAdapterRef = new PouchDbAdapterReference(this.remoteCouchDBAddress + this.remoteCouchReferenceDBName, false );
    this.syncStatusRef = this._pouchDbAdapterRef.syncStatusRef.asObservable();
    this.couchdbUpRef = this._pouchDbAdapterRef.couchDbUpRef.asObservable();

    // Citation Data Setup
    this._pouchDbAdapterCit = new PouchDbAdapterCitation(this.remoteCouchDBAddress + this.remoteCouchCitationDBName, this.pouchDbDebugMode);
    this.syncStatusCit = this._pouchDbAdapterCit.syncStatusCit.asObservable();
    this.couchdbUpCit = this._pouchDbAdapterCit.couchDbUpCit.asObservable();
  }

  ngOnInit() {
    console.log('Debug Mode = ', this.pouchDbDebugMode);
    this.remoteCouchDBAddress = this.config.get('RemoteCouchDBUrl').toLowerCase();
    this.remoteCouchCitationDBName = this.config.get('RemoteCouchCitationDBName').toLowerCase();
    this.remoteCouchReferenceDBName = this.config.get('RemoteCouchReferenceDBName').toLowerCase();
    this.pouchDbDebugMode = this.config.get('PouchDBDebugMode');
  }

  getReferenceDocs(howmany: number): Promise<any> {
    return Promise.resolve(this._pouchDbAdapterRef.getDocs(howmany));
  }

  // wrapper for the get 20docs method in the adpater class
  getCitationDocs(howmany: number): Promise<any> {
    return Promise.resolve(this._pouchDbAdapterCit.getDocs(howmany));
  }

  postCitationDoc(doc): Promise<any> {
    return Promise.resolve(this._pouchDbAdapterCit.post(doc));
  }

}


