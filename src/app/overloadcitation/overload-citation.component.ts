import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'overload-citation',
    templateUrl: './overload-citation.component.html',
    styleUrls: ['./overload-citation.component.css']
})

export class OverloadCitationComponent implements OnInit {
    myform: FormGroup;

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
                zip: new FormControl('', Validators.required),
                age: new FormControl('', Validators.required),
                birthDate: new FormControl('', Validators.required),
                race: new FormControl('', Validators.required),
                sex: new FormControl('', Validators.required),
                eyes: new FormControl('', Validators.required),
                height: new FormControl('', Validators.required),
                weight: new FormControl('', Validators.required),
                licenseNum: new FormControl('', Validators.required),
            }),
            owner: new FormControl('', Validators.required),
            origin: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            destination: new FormControl('', Validators.required),
            vehicleLicenseNum: new FormControl('', Validators.required),
            vehicleLicenseState: new FormControl('', Validators.required),
            vehicleLicenseYear: new FormControl('', Validators.required),
            vehicleMake: new FormControl('', Validators.required),
            location: new FormControl('', Validators.required),
            stateStatute: new FormControl('', Validators.required),
            totalGross: new FormControl('', Validators.required),
            bridgeFormula: new FormControl(''),
            otherViolations: new FormControl(''),
            legal: new FormControl('', Validators.required),
            totalWeightViolation: new FormControl('', Validators.required),
            commodity: new FormControl('', Validators.required),
            officerOne: new FormControl('', Validators.required),
            officerTwo: new FormControl('', Validators.required),
            unitOrStation: new FormControl('', Validators.required),
            court: new FormControl('', Validators.required),
            courtCity: new FormControl('', Validators.required),
            courtDateTime: new FormControl('', Validators.required),
            bondReceivedBy: new FormControl('', Validators.required),
            amount: new FormControl('', Validators.required),
            penalty: new FormControl('', Validators.required),
            fine: new FormControl('', Validators.required),
            cost: new FormControl('', Validators.required),
            billPenaltyTo: new FormControl('', Validators.required),
            billAddress: new FormControl('', Validators.required)
        })
    }

    
}