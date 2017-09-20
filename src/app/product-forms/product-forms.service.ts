import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
@Injectable()
export class ProductFormsService {
    private _addUserDetail = new Subject();
    private _addOverloadCitation = new Subject();
    private _addViolationNotice = new Subject();

    addUserDetail$ = this._addUserDetail.asObservable();
    addOverloadCitation$ = this._addOverloadCitation.asObservable();
    addViolationNotice$ = this._addViolationNotice.asObservable();

    addUserDetail() {
        this._addUserDetail.next();
    }
    addOverloadCitation() {
        this._addOverloadCitation.next();
    }
    addViolationNotice() {
        this._addViolationNotice.next();
    }
}
