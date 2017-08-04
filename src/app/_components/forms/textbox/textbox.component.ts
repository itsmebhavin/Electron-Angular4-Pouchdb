import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextboxComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => TextboxComponent), multi: true }
  ]
})
export class TextboxComponent implements ControlValueAccessor, OnChanges {

  @Input()
  clabel: String;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() {
    console.log('>  Inside textbox component...');
    console.log(this.clabel);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngOnChanges(inputs) {
    console.log('inside onchanges ... ');
    console.log(inputs);
  }
  writeValue(value) {
    if (value) {
      console.log('inside writevalue ... ');
      console.log(value);
    }
  }

}
