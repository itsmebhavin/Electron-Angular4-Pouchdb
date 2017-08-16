import { Component, Input, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
})
export class ComboboxComponent {

  protected dataService: CompleterData;
  protected completerService: CompleterService;
  @Input() values: any;
  @Input() label: string;
  @Input() control: FormControl;
  @Input() valueField: string;

  constructor(private completerServiceTemp: CompleterService) {
    //Grab instance of service from constructor.
    this.completerService = completerServiceTemp;
  }

  ngOnInit() {
    //Use list of valueField property from object passed in, if no property is passed in it will display object.
    this.dataService = this.completerService.local(this.values, this.valueField, this.valueField);
  }

}
