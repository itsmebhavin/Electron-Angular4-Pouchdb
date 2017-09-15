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
      console.log(response.rows[0].doc);

      let tables = [];

      //Parse response object into array of tables.
      for (let key in response.rows[0].doc) {
        if(key == "_id" || key == "_rev")
          continue;
        
        if(response.rows[0].doc.hasOwnProperty(key)) {
          let table = { rows: null, columns: [], name: key};

          //Assign rows.
          table.rows = response.rows[0].doc[key];

          //Fetch column names from first entry.
          if(table.rows.length > 0) {
            for (let key in table.rows[0]) {
                table.columns.push({ name: key });
            }
          }

          //Add to tables array.
          tables.push(table);
        }
      }

      console.log(tables);
      this.referenceData = tables;
    });
  }
}
