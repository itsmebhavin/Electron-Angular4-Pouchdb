import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'db-sync-indicator',
  templateUrl: './db-sync-indicator.component.html',
  styles: [`
    .red{
      background-color:red;
    }
    .orange{
      background-color:orange;
    }
    .green{
      background-color:lime-green;
    }
  `]
})
export class DbSyncIndicatorComponent implements OnChanges {

  syncText: string;
  syncStyle: string;

  @Input()
  dbName = '';

  @Input()
  syncStatus: boolean;

  @Input()
  serverUp: boolean;

  constructor() { }

  ngOnChanges() {
    if (!this.serverUp) {
      this.syncStyle = 'red';
      this.syncText =  'Offline';
    } else if (!this.syncStatus) {
      this.syncStyle = 'orange';
      this.syncText = 'Synchronizing';
    } else {
      this.syncStyle = 'green';
      this.syncText =  'Synchronized';
    }
  }

}
