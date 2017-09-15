import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { CustomValidationErrors } from '../_services/validation/validation.service';

@Component({
    selector: 'violation-notice',
    templateUrl: './violation-notice.component.html',
    styleUrls: ['./violation-notice.component.css']
})

export class ViolationNoticeComponent implements OnInit {
    violationNoticeForm: FormGroup;
    formErrors: CustomValidationErrors[] = [];
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
    isCollapsed = false;


    summonsLocations: string[] = [
        'AR Department of Finance and Administration'
    ];

    log(form) {
        console.log(form);
    }

    constructor(private _fb: FormBuilder) { }

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
        this.validateAllFormFields('violation-notice', formGroup, this.formErrors);
    }

    ngOnInit() {
        this.violationNoticeForm = this._fb.group({
            driver: this._fb.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                initial: ['', Validators.required],
                street: ['', Validators.required],
                city: ['', Validators.required],
                state: ['', Validators.required],
                age: ['', Validators.required],
                birthDate: ['', Validators.required],
                race: ['', Validators.required],
                sex: ['', Validators.required],
                height: ['', Validators.required],
                weight: ['', Validators.required],
                licenseNum: ['', Validators.required],
                licenseClass: ['', Validators.required],
                licenseState: ['', Validators.required],
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
            violation: this._fb.group({
                dateTime: ['', Validators.required],
                location: ['', Validators.required],
                stateStatute: ['', Validators.required],
                stateStatuteViolation: ['', Validators.required],
                codeNum: ['', Validators.required],
                violation: ['', Validators.required],
                officer: ['', Validators.required],
                officerUnit: ['', Validators.required],
                summonsLocation: ['', Validators.required],
                summonsDate: ['', Validators.required]
            })
        });
        console.log(this.violationNoticeForm);
        this.violationNoticeForm.value.driver.firstName = 'Shane';
        this.violationNoticeForm.value.driver.lastName = 'Parcus';
        console.log(this.violationNoticeForm);

        // Form Error list subscriber. If any changes happen to form or it's controls, we are changing global validation list.
        this.violationNoticeForm.valueChanges.subscribe(val => {
            this.getFormValidationErrors(this.violationNoticeForm);
            // this.validateAllFormFields(this.violationNoticeForm);
        });
    }

    public collapsed(event: any): void {
        console.log(event);
    }

    public expanded(event: any): void {
        console.log(event);
    }


}
