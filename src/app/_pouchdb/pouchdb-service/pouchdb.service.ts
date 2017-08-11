import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// the pouchdb-adapter file/class in the same folder
import { PouchDbAdapterCitation, PouchDbAdapterReference } from './pouchdb-adapter';
import { ConfigService, Configuration } from '../../config.service';

@Injectable()
export class PouchdbService {

  // URL of CouchDB (hardwired above)
  static remoteCouchDBAddress: string;
  static remoteCouchCitationDBName: string;
  static remoteCouchReferenceDBName: string;
  static pouchDbDebugMode: boolean;
  static fakeUserNameForDB: string;

  // handler for the adapter class
  _pouchDbAdapterRef: PouchDbAdapterReference;
  _pouchDbAdapterCit: PouchDbAdapterCitation;
  // rxjs observables to broadcast sync status
  syncStatusRef: Observable<boolean>;
  couchdbUpRef: Observable<boolean>;

  syncStatusCit: Observable<boolean>;
  couchdbUpCit: Observable<boolean>;

  // initiate adapter class and hook up the observables
  constructor(private config: ConfigService) {

    console.log( PouchdbService.remoteCouchDBAddress, PouchdbService.remoteCouchCitationDBName );
    // Reference Data Setup
    this._pouchDbAdapterRef = new PouchDbAdapterReference
      (PouchdbService.remoteCouchDBAddress + PouchdbService.remoteCouchReferenceDBName, PouchdbService.pouchDbDebugMode);
    this.syncStatusRef = this._pouchDbAdapterRef.syncStatusRef.asObservable();
    this.couchdbUpRef = this._pouchDbAdapterRef.couchDbUpRef.asObservable();

    // Citation Data Setup
    this._pouchDbAdapterCit = new PouchDbAdapterCitation
      (PouchdbService.remoteCouchDBAddress + 
        PouchdbService.remoteCouchCitationDBName + '_' +
         PouchdbService.fakeUserNameForDB, PouchdbService.pouchDbDebugMode);
    this.syncStatusCit = this._pouchDbAdapterCit.syncStatusCit.asObservable();
    this.couchdbUpCit = this._pouchDbAdapterCit.couchDbUpCit.asObservable();

  }

  initializeConfig(config) {
    console.log(config);
    PouchdbService.remoteCouchDBAddress = config.RemoteCouchDBUrl.toLowerCase();
    PouchdbService.remoteCouchCitationDBName = config.RemoteCouchCitationDBName.toLowerCase();
    PouchdbService.remoteCouchReferenceDBName = config.RemoteCouchReferenceDBName.toLowerCase();
    PouchdbService.pouchDbDebugMode = config.PouchDBDebugMode;
    PouchdbService.fakeUserNameForDB = config.FakeUserName.toLowerCase();
    console.log('FakeUserName = ', PouchdbService.fakeUserNameForDB);
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


