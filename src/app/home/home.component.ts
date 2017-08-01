import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myform: FormGroup;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor() { }

  ngOnInit() {
    // this.myform = new FormGroup({
    //     name: new FormGroup({
    //         firstName: new FormControl(),
    //         lastName: new FormControl(),
    //     }),
    //     email: new FormControl(),
    //     password: new FormControl(),
    //     language: new FormControl()
    // });

    //WITH VALIDATIONS
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      language: new FormControl()
    });
  }

}
