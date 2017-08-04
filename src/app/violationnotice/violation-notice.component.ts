import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'violation-notice',
    templateUrl: './violation-notice.component.html',
    styleUrls: ['./violation-notice.component.css']
})

export class ViolationNoticeComponent implements OnInit {
    myform: FormGroup;

    violations: string[] = [
      'Overweight on License',
      'CDL Violation',
      'Speeding',
      'Violation NR or Farm License',
      'CMV Driver Violation',
      'Overweight Violation',
      'No Vehicle License',
      'CMV Equipment Violation',
      'Other'
    ];

    summonsLocations: string[] = [
      'AR Department of Finance and Administration',
      'Other'
    ];

    log(myform) {
        console.log(myform);
    }

    constructor() {}

    ngOnInit() {
        this.myform = new FormGroup({
            dateTime: new FormControl('', Validators.required),
            driver: new FormGroup({
                firstName: new FormControl('', Validators.required),
                lastName: new FormControl('', Validators.required),
                initial: new FormControl('', Validators.required),
                street: new FormControl('', Validators.required),
                city: new FormControl('', Validators.required),
                state: new FormControl('', Validators.required),
                age: new FormControl('', Validators.required),
                birthDate: new FormControl('', Validators.required),
                race: new FormControl('', Validators.required),
                sex: new FormControl('', Validators.required),
                height: new FormControl('', Validators.required),
                weight: new FormControl('', Validators.required),
                licenseNum: new FormControl('', Validators.required),
                licenseClass: new FormControl('', Validators.required),
                licenseState: new FormControl('', Validators.required),
                origin: new FormControl('', Validators.required),
                address: new FormControl('', Validators.required),
                destination: new FormControl('', Validators.required)
            }),
            vehicle: new FormGroup({
                owner: new FormControl('', Validators.required),            
                vehicleLicenseNum: new FormControl('', Validators.required),
                vehicleLicenseState: new FormControl('', Validators.required),
                vehicleLicenseYear: new FormControl('', Validators.required),
                vehicleMake: new FormControl('', Validators.required)
            }),    
            violation: new FormGroup({
                location: new FormControl('', Validators.required),
                stateStatute: new FormControl('', Validators.required),
                stateStatuteViolation: new FormControl('', Validators.required),
                codeNum: new FormControl('', Validators.required),
                violation: new FormControl('', Validators.required),
                officer: new FormControl('', Validators.required),
                officerUnit: new FormControl('', Validators.required),
                summonsLocation: new FormControl('', Validators.required),
                summonsDate: new FormControl('', Validators.required)
            })
        })
        console.log(this.myform);
        this.myform.value.driver.firstName = "Shane";
        this.myform.value.driver.lastName = "Parcus";
        console.log(this.myform);
    }

    
}