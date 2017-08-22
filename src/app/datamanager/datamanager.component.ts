import { Component, OnInit } from '@angular/core';
import { PouchdbService } from '../_pouchdb/pouchdb.service';

@Component({
  selector: 'app-datamanager',
  templateUrl: './datamanager.component.html',
  styleUrls: ['./datamanager.component.css'],
  providers: [PouchdbService]
})
export class DatamanagerComponent implements OnInit {

  syncStatus: boolean;
  couchDbUp: boolean;
  referenceData: any;
  busyRefData: Promise<any>;
  remoteCouchDBAddress: string;
  constructor(private pouchdbservice: PouchdbService) {

    PouchdbService.syncStatusRef.subscribe(result => {
      this.syncStatus = result;
    });
    PouchdbService.couchdbUpRef.subscribe(result => {
      this.couchDbUp = result;
    });

    this.remoteCouchDBAddress = PouchdbService.remoteCouchDBAddress;
    this.refreshRefData();
  }

  ngOnInit() {
  }

  refreshRefData() {
    this.busyRefData = this.pouchdbservice.getReferenceDocs(50).then((response) => {
      console.log('Reference data refreshed!');
      this.referenceData = response;
    });
  }
}
