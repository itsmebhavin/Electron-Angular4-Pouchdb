import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TabsService {
    private ticketNum: string;

    constructor() {
        this.ticketNum = '';
    }

    public setTicketNum(val: string): void {
        this.ticketNum = val;
    }

    public getTicketNum(): string {
        return this.ticketNum;
    }
}
