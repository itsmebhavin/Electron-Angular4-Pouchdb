import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dynamic-tabs]'
})
export class DynamicTabsDirective {
    constructor(public viewContainer: ViewContainerRef) { }
}