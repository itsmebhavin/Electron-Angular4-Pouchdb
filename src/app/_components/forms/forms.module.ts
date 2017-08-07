import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {PrettyJsonModule, SafeJsonPipe} from 'angular2-prettyjson';
import {JsonPipe} from '@angular/common';
import { TextboxComponent } from './textbox/textbox.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PrettyJsonModule,
    ],
    exports: [
        TextboxComponent,
    ],
    declarations: [
        TextboxComponent,
    ],
    providers: [{ provide: JsonPipe, useClass: SafeJsonPipe }],
})
export class UfpFormsModule {
     static forRoot(): ModuleWithProviders {
    return {
      ngModule: UfpFormsModule,
      providers: [{ provide: JsonPipe, useClass: SafeJsonPipe }]
    };
  }
 }

