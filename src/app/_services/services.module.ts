import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import {PrettyJsonModule, SafeJsonPipe} from 'angular2-prettyjson';
import {JsonPipe} from '@angular/common';
import { ThemeService } from './theme/theme.service';
import { UserAgentService } from './useragent/useragent.service';
import { ValidationService } from './validation/validation.service';

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
        ThemeService,
        UserAgentService,
        ValidationService
    ],
})
export class UfpServicesModule {
}

