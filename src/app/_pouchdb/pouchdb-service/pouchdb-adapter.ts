import PouchDB from 'pouchdb';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../../config.service';

export class PouchDbAdapterCitation {

    private _pouchDBCit: any;
    private _couchDBCit: any;
    private _remoteCouchDBAddress: string;
    private _pouchDbNameCit: string;

    // rxjs behaviour subjects to expose stats flags
    syncStatusCit = new BehaviorSubject<boolean>(false);
    couchDbUpCit = new BehaviorSubject<boolean>(false);

    constructor(remoteCouchDBAddress: string, debugMode: boolean) {
        this._remoteCouchDBAddress = remoteCouchDBAddress;
        // string function to extract the database name from the URL
        this._pouchDbNameCit = remoteCouchDBAddress
            .substr(remoteCouchDBAddress.lastIndexOf('/') + 1);
        // init local PouchDB
        this._pouchDBCit = new PouchDB(this._pouchDbNameCit);
        if (debugMode) { PouchDB.debug.enable('*'); }
        console.log('Connecting local citation db:', this._pouchDBCit);
        // init PouchDB adapter for remote CouchDB
        this._couchDBCit = new PouchDB(remoteCouchDBAddress);
        console.log('Connecting remote citation db:', this._couchDBCit);
        // sync the PouchDB and CouchDB
        this._pouchDBCit.sync(this._couchDBCit, {
            live: true,
            retry: true,
            continuous: true
        })
            // attach sync status update functions to PouchDB events
            .on('paused', err => { this.syncStatusCitUpdate(); })
            .on('change', info => { this.syncStatusCitUpdate(); });
    }

    // pretty basic and crude function
    // return a Promise with the first 20 docs from allDocs as is
    getDocs(howmany: number): Promise<any> {
        return new Promise(resolve => {
            this._pouchDBCit.allDocs({
                include_docs: true,
                limit: howmany
            })
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }

    post(doc): Promise<any> {
        return new Promise(resolve => {
            this._pouchDBCit.post(doc)
                .then((response => {
                    resolve(response);
                }))
                .catch((error) => {
                    console.log(error);
                });
        });
    }

    // function to call the below functions
    // then update the rxjs BehaviourSubjects with the 
    // results
    private syncStatusCitUpdate(): void {
        this.checkCitPouchCouchSync()
            .then((result) => {
                this.syncStatusCit.next(result);
            });
        this.checkCitCouchUp()
            .then((result) => {
                this.couchDbUpCit.next(result);
            });

    }

    // part of the JSON returned by PouchDB from the info() method
    // is "update_seq". When these numbers are equal then the databases
    // are in sync. The way its buried in the JSON means some string
    // functions are required to extract it
    private checkCitPouchCouchSync(): Promise<boolean> {
        // if both objects exist then make a Promise from both their
        // info() methods
        if (this._pouchDBCit && this._couchDBCit) {
            return Promise.all([this._pouchDBCit.info(), this._couchDBCit.info()])
                // using the 0 and 1 items in the array of two
                // that is produced by the Promise
                // Do some string trickery to get a number for update_seq
                // and return "true" if the numbers are equal.
                .then((results: any[]) => {
                    return (Number(String(results[0]
                        .update_seq)
                        .split('-')[0])
                        ===
                        Number(String(results[1]
                            .update_seq)
                            .split('-')[0]));
                })
                // on error just resolve as false
                .catch((error) =>  {return false;} );
        } else {
            // if one of the PouchDB or CouchDB objects doesn't exist yet
            // return resolve false
            return Promise.resolve(false);
        }
    }

    // fairly self explanatory function to make a 
    // GET http request to the URL and return false
    // if an error status or a timeout occurs, true if 
    // successful.
    private checkCitCouchUp(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', this._remoteCouchDBAddress, true);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            };
            xhr.onerror = () => {
                resolve(false);
            };
            xhr.send();
        });
    }
}

export class PouchDbAdapterReference {

    private _pouchDBRef: any;
    private _couchDBRef: any;
    private _remoteCouchDBAddress: string;
    private _pouchDbNameRef: string;

    // rxjs behaviour subjects to expose stats flags
    syncStatusRef = new BehaviorSubject<boolean>(false);
    couchDbUpRef = new BehaviorSubject<boolean>(false);

    constructor(remoteCouchDBAddress: string, debugMode: boolean) {
        this._remoteCouchDBAddress = remoteCouchDBAddress;
        // string function to extract the database name from the URL
        this._pouchDbNameRef = remoteCouchDBAddress
            .substr(remoteCouchDBAddress.lastIndexOf('/') + 1);
        // init local PouchDB
        this._pouchDBRef = new PouchDB(this._pouchDbNameRef);
        if (debugMode) { PouchDB.debug.enable('*'); }
        console.log('Connecting local db:', this._pouchDBRef);
        // init PouchDB adapter for remote CouchDB
        this._couchDBRef = new PouchDB(remoteCouchDBAddress);
        console.log('Connecting remote db:', this._couchDBRef);
        // sync the PouchDB and CouchDB
        this._pouchDBRef.sync(this._couchDBRef, {
            live: true,
            retry: true,
            continuous: true
        })
            // attach sync status update functions to PouchDB events
            .on('paused', err => { this.syncStatusRefUpdate(); })
            .on('change', info => { this.syncStatusRefUpdate(); });
    }

    // pretty basic and crude function
    // return a Promise with the first 20 docs from allDocs as is
    getDocs(howmany: number): Promise<any> {
        return new Promise(resolve => {
            this._pouchDBRef.allDocs({
                include_docs: true,
                limit: howmany
            })
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }

    post(doc): Promise<any> {
        return new Promise(resolve => {
            this._pouchDBRef.post(doc)
                .then((response => {
                    resolve(response);
                }))
                .catch((error) => {
                    console.log(error);
                });
        });
    }

    // function to call the below functions
    // then update the rxjs BehaviourSubjects with the 
    // results
    private syncStatusRefUpdate(): void {
        this.checkRefPouchCouchSync()
            .then((result) => {
                this.syncStatusRef.next(result);
            });
        this.checkRefCouchUp()
            .then((result) => {
                this.couchDbUpRef.next(result);
            });

    }

    // part of the JSON returned by PouchDB from the info() method
    // is "update_seq". When these numbers are equal then the databases
    // are in sync. The way its buried in the JSON means some string
    // functions are required to extract it
    private checkRefPouchCouchSync(): Promise<boolean> {
        // if both objects exist then make a Promise from both their
        // info() methods
        if (this._pouchDBRef && this._couchDBRef) {
            return Promise.all([this._pouchDBRef.info(), this._couchDBRef.info()])
                // using the 0 and 1 items in the array of two
                // that is produced by the Promise
                // Do some string trickery to get a number for update_seq
                // and return "true" if the numbers are equal.
                .then((results: any[]) => {
                    return (Number(String(results[0]
                        .update_seq)
                        .split('-')[0])
                        ===
                        Number(String(results[1]
                            .update_seq)
                            .split('-')[0]));
                })
                // on error just resolve as false
                .catch((error) =>  { return false; } );
        } else {
            // if one of the PouchDB or CouchDB objects doesn't exist yet
            // return resolve false
            return Promise.resolve(false);
        }
    }

    // fairly self explanatory function to make a 
    // GET http request to the URL and return false
    // if an error status or a timeout occurs, true if 
    // successful.
    private checkRefCouchUp(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', this._remoteCouchDBAddress, true);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            };
            xhr.onerror = () => {
                resolve(false);
            };
            xhr.send();
        });
    }
}



