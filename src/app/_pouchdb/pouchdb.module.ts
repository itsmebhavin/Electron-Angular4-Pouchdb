import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import {PrettyJsonModule, SafeJsonPipe} from 'angular2-prettyjson';
import {JsonPipe} from '@angular/common';
import { PouchdbService } from './pouchdb-service/pouchdb.service';

@NgModule({
    imports: [
        CommonModule,
        PrettyJsonModule,
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
        { provide: JsonPipe, useClass: SafeJsonPipe },
        PouchdbService
    ],
})
export class UfpPouchDBModule {
}

