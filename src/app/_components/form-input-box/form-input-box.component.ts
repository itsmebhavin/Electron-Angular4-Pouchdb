import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-form-input-box',
  templateUrl: './form-input-box.component.html',
  styleUrls: ['./form-input-box.component.css']
})
export class FormInputBoxComponent {
  @Input('group') form: FormGroup;
  @Input() type: String;
  @Input() control: FormControl;
  @Input() label: String;

  constructor() { }
}