import { PouchDB } from 'pouchdb';
import { ReplaySubject } from 'rxjs/Rx';
import { Config } from '../../app.config';
import { Injectable } from '@angular/core';
// Dataservice with all CRUD operations with pouchdb.
// Pouch to Couch sync settings.
@Injectable()
export class DataService {
    private db;
    private remoteDB;
    private data;
    private readyStream: ReplaySubject<boolean>;

    constructor(
        private _config: Config
    ) {
        this.readyStream = new ReplaySubject<boolean>(1);
        this._config.load().then((config: any) => {
            this.db = new PouchDB(config.CouchDBName.toLowerCase());
            this.db.setMaxListeners(100);
            console.log('Connecting local db:', config.CouchDBName.toLowerCase());
            this.remoteDB = null;
            this.remoteDB = config.RemoteCouchDBUrl + '/' + config.CouchDBName.toLowerCase();
            this.syncDb();
            // Signal that we're loaded and ready, and start handling requests
            this.readyStream.next(true);
        });
    }

    addDocument(doc) {
        this.db.put(doc);
        if (this.remoteDB) {
            this.syncDb();
        }
    }

    updateDocument(existingDoc) {
        this.db.query(
            (doc, emit) => {
                if (doc.userId === existingDoc.userId && doc.searchText === existingDoc.searchText) {
                    emit(doc._id, doc);
                }
            },
            {
                include_docs: true
            }
        ).then((result) => {
            console.log('Pouch found the following records for update', result);
        });
    }

    getDocuments() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.db.allDocs({
                include_docs: true,
                descending: true
            }).then((result) => {
                this.data = [];
                const docs = result.rows.map((row) => {
                    this.data.push(row.doc);
                });
                resolve(this.data);
                this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', (change) => {
                    this.handleChange(change);
                });
            }).catch((error) => {
                console.log(error);
            });
        });
    }

    handleChange(change) {
        let changedDoc = null;
        let changedIndex = null;

        this.data.forEach((doc, index) => {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });

        if (change.deleted) {
            this.data.splice(changedIndex, 1);
        } else {
            if (changedDoc) {
                this.data[changedIndex] = change.doc;
            } else {
                this.data.push(change.doc);
            }
        }
    }

    syncDb() {
        if (this.remoteDB) {
            this.db.replicate.to(this.remoteDB);
            this.db.replicate.from(this.remoteDB);
        }
    }
}
