import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'toShortDateTime' })
export class ShortDateTimePipe implements PipeTransform {
    transform(value: string): string {
        const nonUtcValue = value.replace('Z', '');
        if (moment(nonUtcValue).isValid()) {
            return moment(nonUtcValue).format('M/D/YYYY h:mm A');
        }
    }
}

@Pipe({ name: 'toLongDate' })
export class LongDatePipe implements PipeTransform {
    transform(value: string): string {
        const inVal = moment(value, 'MM/DD/YYYY');
        if (inVal.isValid()) {
            return inVal.format('MMM DD, YYYY');
        }
    }
}

@Pipe({ name: 'sortByString' })
export class SortByStringPipe implements PipeTransform {
    private stringSort(a: string, b: string): number {
        if (!a || !b) {
            return 0;
        }

        const str1 = a.toUpperCase().replace('.', '');
        const str2 = b.toUpperCase().replace('.', '');

        if (str1 < str2) {
            return -1;
        } else if (str1 > str2) {
            return 1;
        } else {
            return 0;
        }
    }

    transform(value: any[], fieldname: string): any[] {
        if (value && value.length > 0) {
            return value.sort((a, b) => this.stringSort(a[fieldname], b[fieldname]));
        } else {
            return value;
        }
    }
}

