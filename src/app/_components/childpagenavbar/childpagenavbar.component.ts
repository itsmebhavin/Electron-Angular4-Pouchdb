import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-navbar',
    templateUrl: './childpagenavbar.component.html'
})
export class ChildPageNavBarComponent {
    @Input('hrclass')
    hrclass: String = '';
    @Input('btnclass')
    btnclass: String = '';
    @Input('textclass')
    textclass: String = '';
    @Input('textheader')
    textheader: String = '';

    constructor() {
    }
}
