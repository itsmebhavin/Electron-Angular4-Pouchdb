import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'db-sync-indicator',
  template: `
      <p [ngClass]="['styleClass']" >{{ syncText }}</p>
  `
})
export class DbSyncIndicatorComponent implements OnChanges {

  syncText: string;
  styleClass: string;

  @Input()
  dbName = '';

  @Input()
  syncStatus: boolean;

  @Input()
  serverUp: boolean;

  constructor() { }

  ngOnChanges() {
    if (!this.serverUp) {
      this.styleClass  = 'danger';
      this.syncText = (this.dbName + ' ' || '') + 'Offline';
    } else if (!this.syncStatus) {
      this.styleClass  = 'warning';
      this.syncText = (this.dbName + ' ' || '') + 'Synchronizing';
    } else {
      this.styleClass  = 'success';
      this.syncText = (this.dbName + ' ' || '') + 'Synchronized';
    }
    console.log(this.styleClass + '    ' + this.syncText);
  }

}
