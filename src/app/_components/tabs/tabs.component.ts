/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
    Component,
    ContentChildren,
    QueryList,
    AfterContentInit,
    ViewChild,
    ComponentFactoryResolver,
    ViewContainerRef,
    EventEmitter
} from '@angular/core';

import { TabComponent, Tab } from './tab.component';
import { DynamicTabsDirective } from './dynamic-tabs.directive';
import { Output } from '@angular/core';
import { TabsService } from './tabs.service';

@Component({
    selector: 'my-tabs',
    templateUrl: './tabs.component.html',
    styles: [
        `
    .tab-close {
      color: gray;
      text-align: right;
      cursor: pointer;
    }
    `
    ]
})
export class TabsComponent implements AfterContentInit {

    @Output()
    @Output() addedTab = new EventEmitter<any>();

    dynamicTabs: TabComponent[] = [];

    @ContentChildren(TabComponent)
    tabs: QueryList<TabComponent>;

    @ViewChild(DynamicTabsDirective)
    // dynamicTabPlaceholder: DynamicTabsDirective;

    /*
      Alternative approach of using an anchor directive
      would be to simply get hold of a template variable
      as follows
    */
    @ViewChild('container', { read: ViewContainerRef }) dynamicTabPlaceholder;

    constructor(private tabService: TabsService, private _componentFactoryResolver: ComponentFactoryResolver) {

    }

    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        const activeTabs = this.tabs.filter((tab) => tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    getActiveTab(): TabComponent[] {
        const activeTabs = this.dynamicTabs.filter(tab => tab.active = true);
        return activeTabs;
    }

    closeAllTabs() {
        for (let i = this.dynamicTabs.length; i >= 0; i--) {
            // remove the tab from our array
            this.dynamicTabs.splice((i - 1), 1);

            // destroy our dynamically created component again
            const viewContainerRef = this.dynamicTabPlaceholder;
            viewContainerRef.remove((i - 1));
        }
        // set tab index to 1st one
        this.selectTab(this.tabs.first);
        this.addedTab.emit(this.dynamicTabs.length);
    }

    openTab(id: string, title: string, template, data, isCloseable = false) {
        // get a component factory for our TabComponent
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(TabComponent);

        // fetch the view container reference from our anchor directive
        // const viewContainerRef = this.dynamicTabPlaceholder.viewContainer;

        // alternatively...
        const viewContainerRef = this.dynamicTabPlaceholder;

        // create a component instance
        const componentRef = viewContainerRef.createComponent(componentFactory);
        // set the according properties on our component instance
        const instance: Tab = componentRef.instance as Tab;
        instance.id = id;
        instance.title = title;
        instance.template = template;
        instance.dataContext = data;
        instance.isCloseable = isCloseable;

        // remember the dynamic component for rendering the
        // tab navigation headers
        this.dynamicTabs.push(componentRef.instance as TabComponent);

        // set it active
        this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);

        // Set Ticketnum via tab service
        this.tabService.setTicketNum(title);
        this.addedTab.emit(this.dynamicTabs.length);
    }

    selectTab(tab: TabComponent) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => tab.active = false);
        this.dynamicTabs.forEach(tab => tab.active = false);

        // activate the tab the user has clicked on.
        tab.active = true;
    }

    closeTab(tab: TabComponent) {
        for (let i = 0; i < this.dynamicTabs.length; i++) {
            if (this.dynamicTabs[i] === tab) {
                // remove the tab from our array
                this.dynamicTabs.splice(i, 1);

                // destroy our dynamically created component again
                // const viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
                const viewContainerRef = this.dynamicTabPlaceholder;
                viewContainerRef.remove(i);

                // set tab index to 1st one
                this.selectTab(this.tabs.first);
                break;
            }
        }
        this.addedTab.emit(this.dynamicTabs.length);
    }

    closeActiveTab() {
        const activeTabs = this.dynamicTabs.filter((tab) => tab.active);
        if (activeTabs.length > 0) {
            // close the 1st active tab (should only be one at a time)
            this.closeTab(activeTabs[0]);
        }
        this.addedTab.emit(this.dynamicTabs.length);
    }
    closeAllButCurrentTab() {
        const activeTabs = this.dynamicTabs.filter((tab) => tab.active);
        const activeTab = this.dynamicTabs.findIndex(tab => tab.id === activeTabs[0].id);
        for (let i = this.dynamicTabs.length; i > 0; i--) {
            if (i === 0) break;
            if (this.dynamicTabs[i - 1].id === activeTabs[0].id) {
                continue;
            }

            // remove the tab from our array
            this.dynamicTabs.splice((i - 1), 1);

            // destroy our dynamically created component again
            const viewContainerRef = this.dynamicTabPlaceholder;
            viewContainerRef.remove((i - 1));
        }

        this.addedTab.emit(this.dynamicTabs.length);
    }
}
