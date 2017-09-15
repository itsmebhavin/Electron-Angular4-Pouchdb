import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { CustomValidationErrors } from '../_services/validation/validation.service';

@Component({
    selector: 'overload-citation',
    templateUrl: './overload-citation.component.html',
    styleUrls: ['./overload-citation.component.css']
})

export class OverloadCitationComponent implements OnInit {
    overLoadForm: FormGroup;
    isCollapsed = false;

    formErrors: CustomValidationErrors[] = [];
    constructor(private _fb: FormBuilder) { }
    public collapsed(event: any): void {
        // console.log(event);
    }

    public expanded(event: any): void {
        // console.log(event);
    }
    ngOnInit() {
        this.overLoadForm = this._fb.group({
            driver: this._fb.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                initial: ['', Validators.required],
                street: ['', Validators.required],
                city: ['', Validators.required],
                state: ['', Validators.required],
                zip: ['', Validators.required],
                age: ['', Validators.required],
                birthDate: ['', Validators.required],
                race: ['', Validators.required],
                sex: ['', Validators.required],
                eyes: ['', Validators.required],
                height: ['', Validators.required],
                weight: ['', Validators.required],
                licenseNum: ['', Validators.required],
                origin: ['', Validators.required],
                address: ['', Validators.required],
                destination: ['', Validators.required]
            }),
            vehicle: this._fb.group({
                owner: ['', Validators.required],
                vehicleLicenseNum: ['', Validators.required],
                vehicleLicenseState: ['', Validators.required],
                vehicleLicenseYear: ['', Validators.required],
                vehicleMake: ['', Validators.required]
            }),
            citation: this._fb.group({
                dateTime: ['', Validators.required],
                location: ['', Validators.required],
                stateStatute: ['', Validators.required],
                totalGross: ['', Validators.required],
                bridgeFormula: ['', Validators.required],
                otherViolations: ['', Validators.required],
                legal: ['', Validators.required],
                totalWeightViolation: ['', Validators.required],
                commodity: ['', Validators.required]
            }),
            court: this._fb.group({
                officerOne: ['', Validators.required],
                officerTwo: ['', Validators.required],
                unitOrStation: ['', Validators.required],
                court: ['', Validators.required],
                courtCity: ['', Validators.required],
                courtDateTime: ['', Validators.required]
            }),
            disposition: this._fb.group({
                bondReceivedBy: ['', Validators.required],
                amount: ['', Validators.required],
                penalty: ['', Validators.required],
                fine: ['', Validators.required],
                cost: ['', Validators.required],
                billPenaltyTo: ['', Validators.required],
                billAddress: ['', Validators.required]
            })
        });

        this.overLoadForm.valueChanges.subscribe(val => {
            this.getFormValidationErrors(this.overLoadForm);
            // this.validateAllFormFields(this.violationNoticeForm);
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
        this.validateAllFormFields('overload-citation', formGroup, this.formErrors);
    }
}