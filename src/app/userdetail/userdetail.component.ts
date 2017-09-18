
import { ValidationService, CustomValidationErrors } from '../_services/validation/validation.service';
import { Component, OnInit, OnChanges, EventEmitter, Directive, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Validator, ValidationErrors } from '@angular/forms';
import { PouchdbService } from '../_pouchdb/pouchdb.service';
import { CustomValidators } from 'ng2-validation';
import { FocusDirective } from '../_directives/focus.directive';

export interface User {
  name: {
    firstName: string;
    lastName: string;
  };
  userName: string;
  email: string;
  password: string;
  language: string;
}

@Component({
  selector: 'user-detail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
  providers: [PouchdbService]
})

export class UserdetailComponent implements OnInit {
  public myFocusTriggeringEventEmitter = new EventEmitter<any>();

  user: FormGroup;
  remoteCouchDBAddress: string;
  dataString: string;
  syncStatus: boolean;
  couchDbUp: boolean;
  citationData: any;
  busyCitData: Promise<any>;
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  formErrors: CustomValidationErrors[] = [];
  isCollapsed = false;

  someMethod(id) {
    // this will trigger the focus
    this.myFocusTriggeringEventEmitter.emit({ id: id, focus: true });
  }

  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }
  constructor(private _fb: FormBuilder, private pouchdbservice: PouchdbService) {

    PouchdbService.syncStatusCit.subscribe(result => {
      this.syncStatus = result;
    });
    PouchdbService.couchdbUpCit.subscribe(result => {
      this.couchDbUp = result;
    });
    this.remoteCouchDBAddress = PouchdbService.remoteCouchDBAddress;
    this.refreshCitData();
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (valid) {
      console.log(value, valid);
      this.pouchdbservice.postCitationDoc(value).then((response) => {
        console.log(JSON.stringify(response));
        this.refreshCitData();
      });
    }
  }

  destroy_citDb() {
    this.pouchdbservice.destroy_citdb().then((result) => {
      console.log('Database distroyed? ', result);
    });
  }

  refreshCitData() {
    this.busyCitData = this.pouchdbservice.getCitationDocs(100).then((response) => {
      console.log('Citation data refreshed!');
      this.citationData = (response);
    });
  }
  validateAllFormFields(group: string, formGroup: FormGroup, formErrors: CustomValidationErrors[]) {         // {1}
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormControl) {             // {4}
        const controlErrors: ValidationErrors = control.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            // console.log(control);
            // console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            const validateObj = { key: key, keyError: keyError, value: controlErrors[keyError], group: group };
            this.formErrors.push(validateObj);
          });
        }
      } else if (control instanceof FormGroup) {        // {5}
        this.validateAllFormFields(key, control, formErrors);            // {6}
      }

    });
  }

  getFormValidationErrors(formGroup: FormGroup) {
    this.formErrors = []; // empty array everytime.
    this.validateAllFormFields('user-detail', formGroup, this.formErrors);
  }
  ngOnInit() {

    this.user = this._fb.group({
      userName: ['', Validators.required],
      name: this._fb.group({
        firstName: [''],
        lastName: ['', Validators.required],
      }),
      email: ['', [
        Validators.required,
        ValidationService.emailValidator
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      language: []
    });

    this.user.get('name.lastName').setValue('Doe');
    // Form Error list subscriber. If any changes happen to form or it's controls, we are changing global validation list.
    this.user.valueChanges.subscribe(val => {
      this.getFormValidationErrors(this.user);
    });


  }
}

