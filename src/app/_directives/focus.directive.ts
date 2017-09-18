
import { Directive, Input, EventEmitter, ElementRef, Renderer, Inject, OnInit } from '@angular/core';

@Directive({
    selector: '[focus]'
})
export class FocusDirective implements OnInit {
    @Input('focus') focusEvent: EventEmitter<any>;

    constructor( @Inject(ElementRef) private element: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
        this.focusEvent.subscribe(event => {
            const input = this.element.nativeElement.querySelector('input');
            if (input.id === event.id) {
                this.renderer.invokeElementMethod(input, 'focus', []);
            }
        });
    }


}