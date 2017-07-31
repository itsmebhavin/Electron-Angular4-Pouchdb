import { Component, OnInit } from '@angular/core';
import { NetworkStatus, NetworkNotifierService } from './networknotifier.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'network-notifier',
  templateUrl: './networknotifier.component.html'
})
export class NetworknotifierComponent {

    hasNetwork: NetworkStatus = {};
    networkSub: Subscription;
    constructor(service: NetworkNotifierService) {
        this.networkSub = service.networkAvailable$.subscribe(
            networkAvailable => {
                this.hasNetwork = networkAvailable;
            }
        );
    }
}
