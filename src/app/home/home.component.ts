import { ValidationService } from '../_services/validation/validation.service';
import { DataService } from './../_services/data/db';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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

  constructor(private _fb: FormBuilder) {}

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (valid) {
    console.log(value, valid);
    }
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

    console.log(this.user.get('name.lastName').setValue('Doe'));
  }
}
