/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngOutletContext directives.
 */

import { Component, Input } from '@angular/core';
export class Tab {
  id: string;
  icon: string;
  title: string;
  active: boolean;
  isCloseable: boolean;
  template: any;
  dataContext: any;

}

@Component({
  selector: 'my-tab',
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
      <ng-container *ngIf="template"
        [ngTemplateOutlet]="template"
        [ngOutletContext]="{ person: dataContext }"
      >
      </ng-container>
    </div>
  `
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() id: number;
  @Input() icon: string;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template;
  @Input() dataContext;
}
