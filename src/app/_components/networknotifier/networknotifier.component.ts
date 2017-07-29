import { Component, OnInit } from '@angular/core';
import { NetworkStatus, NetworkNotifierService } from './networknotifier.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'network-notifier',
  templateUrl: './networknotifier.component.html',
  styleUrls: ['./networknotifier.component.css']
})
export class NetworknotifierComponent implements OnInit {

  hasNetwork: NetworkStatus = {};
networkSub: Subscription;
  constructor(service: NetworkNotifierService) {
      this.networkSub = service.networkAvailable$.subscribe(
          networkAvailable => {
              this.hasNetwork = networkAvailable;
          }
      );
  }
  ngOnInit() {
  }

}
