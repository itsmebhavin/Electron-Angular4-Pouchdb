import {Component, Input} from '@angular/core';

/**
* NpmBadge component -- Shows a small NPM style badge with content based on the following Inputs:
* @param badgelabel (badgelabel) The right-hand label of the badge.
* @param badgevalue (badgevalue) The left-hand content of the badge.
* @param badgeclass (badgeclass) Shorthand for one of the classes defined in the ngClass directive.
*/
@Component( {
    selector: 'npm-badge',
    templateUrl: './npmbadge.component.html',
    styleUrls: ['./npmbadge.component.css'],
})
export class NpmBadgeComponent {
    @Input()
    badgelabel: String = '';
    @Input()
    badgevalue: String = '';
    @Input()
    badgeclass: String = '';
    @Input()
    isElectronApp: Boolean = true;

    constructor() {
    }
}
