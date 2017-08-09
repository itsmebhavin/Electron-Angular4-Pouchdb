import { ValidationService } from '../_services/validation/validation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PouchdbService } from '../_pouchdb/pouchdb-service/pouchdb.service';

export interface User {
  name: {
    firstName: string;
    lastName: string;
  };

  email: string;
  password: string;
  language: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ PouchdbService ]
})

export class HomeComponent implements OnInit {
  user: FormGroup;
  remoteCouchDBAddress: string;
  dataString: string;
  syncStatus: boolean;
  couchDbUp: boolean;
  citationData: any;
  referenceData: any;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor(private _fb: FormBuilder, private pouchdbservice: PouchdbService) {
     this.pouchdbservice.syncStatusCit.subscribe(result => {
      this.syncStatus = result;
    });
    this.pouchdbservice.couchdbUpCit.subscribe(result => {
      this.couchDbUp = result;
    });
    this.remoteCouchDBAddress = this.pouchdbservice.remoteCouchDBAddress;
    this.refreshCitData();
    this.refreshRefData();
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

  refreshRefData() {
    this.pouchdbservice.getReferenceDocs(5).then((response) => {
      this.referenceData = response;
    });
  }
  refreshCitData() {
    this.pouchdbservice.getCitationDocs(100).then((response) => {
      this.citationData = (response);
    });
  }
  ngOnInit() {

    this.user = this._fb.group({
      name: this._fb.group({
        firstName: ['', Validators.required],
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
  }
}
