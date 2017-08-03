import { ValidationService } from './../../_services/validation/validation.service';
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-controlmessages',
  templateUrl: './controlmessages.component.html',
  styleUrls: ['./controlmessages.component.css']
})
export class ControlmessagesComponent {

  _errorMessage: string;
  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
