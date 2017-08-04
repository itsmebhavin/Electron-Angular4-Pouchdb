import { ValidationService } from '../_services/validation/validation.service';
import { DataService } from './../_services/data/db';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user: FormGroup;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor() { }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    //this._db.addDocument(value);
  }

  ngOnInit() {

    this.user = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [
        Validators.required,
        ValidationService.emailValidator
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      language: new FormControl()
    });
  }
}
