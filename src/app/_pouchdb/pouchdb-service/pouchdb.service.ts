import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// the pouchdb-adapter file/class in the same folder
import { PouchDbAdapterCitation, PouchDbAdapterReference } from './pouchdb-adapter';
import { ConfigService, Configuration } from '../../config.service';

@Injectable()
export class PouchdbService {

  // handler for the adapter class
  _pouchDbAdapterRef: PouchDbAdapterReference;
  _pouchDbAdapterCit: PouchDbAdapterCitation;
  // rxjs observables to broadcast sync status
  syncStatusRef: Observable<boolean>;
  couchdbUpRef: Observable<boolean>;

  syncStatusCit: Observable<boolean>;
  couchdbUpCit: Observable<boolean>;

  // URL of CouchDB (hardwired above)
  public remoteCouchDBAddress = '';
  public remoteCouchCitationDBName = '';
  public remoteCouchReferenceDBName = '';
  public pouchDbDebugMode: boolean;
  public fakeUserNameForDB: string;
  // initiate adapter class and hook up the observables
  constructor(private config: ConfigService) {

    // Reference Data Setup
    this._pouchDbAdapterRef = new PouchDbAdapterReference
      (this.remoteCouchDBAddress + this.remoteCouchReferenceDBName, this.pouchDbDebugMode);
    this.syncStatusRef = this._pouchDbAdapterRef.syncStatusRef.asObservable();
    this.couchdbUpRef = this._pouchDbAdapterRef.couchDbUpRef.asObservable();

    // Citation Data Setup
    this._pouchDbAdapterCit = new PouchDbAdapterCitation
      (this.remoteCouchDBAddress + this.remoteCouchCitationDBName + '_' + this.fakeUserNameForDB, this.pouchDbDebugMode);
    this.syncStatusCit = this._pouchDbAdapterCit.syncStatusCit.asObservable();
    this.couchdbUpCit = this._pouchDbAdapterCit.couchDbUpCit.asObservable();

  }

  initializeConfig(config) {
    console.log(config);
   this.remoteCouchDBAddress = config.RemoteCouchDBUrl.toLowerCase();
      this.remoteCouchCitationDBName = config.RemoteCouchCitationDBName.toLowerCase();
      this.remoteCouchReferenceDBName = config.RemoteCouchReferenceDBName.toLowerCase();
      this.pouchDbDebugMode = config.PouchDBDebugMode;
      this.fakeUserNameForDB = config.FakeUserName.toLowerCase();
      console.log('FakeUserName = ', this.fakeUserNameForDB);
  }

  destroy_citdb() {
    return Promise.resolve(this._pouchDbAdapterCit.destroy());
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


