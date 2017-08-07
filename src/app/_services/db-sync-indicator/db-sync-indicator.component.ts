import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'db-sync-indicator',
  templateUrl: './db-sync-indicator.component.html'
})
export class DbSyncIndicatorComponent {

  syncText: string;
  syncStyle = { 'color': 'red' };

  @Input()
  dbName = '';

  @Input()
  syncStatus: boolean;

  @Input()
  serverUp: boolean;

  constructor() { }

  ngOnChanges() {
    if (!this.serverUp) {
      this.syncStyle.color = 'red';
      this.syncText = (this.dbName + ' ' || '') + 'Offline';
    } else if (!this.syncStatus) {
      this.syncStyle.color = 'blue';
      this.syncText = (this.dbName + ' ' || '') + 'Synchronising';
    } else {
      this.syncStyle.color = 'green';
      this.syncText = (this.dbName + ' ' || '') + 'Synchronised';
    }
  }

}
