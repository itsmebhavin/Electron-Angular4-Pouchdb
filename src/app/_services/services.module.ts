import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import {PrettyJsonModule, SafeJsonPipe} from 'angular2-prettyjson';
import {JsonPipe} from '@angular/common';
import { PouchdbService } from './pouchdb-service/pouchdb.service';
import { ThemeService } from './theme/theme.service';
import { UserAgentService } from './useragent/useragent.service';
import { ValidationService } from './validation/validation.service';
import { DbSyncIndicatorComponent } from './db-sync-indicator/db-sync-indicator.component';

@NgModule({
    imports: [
        CommonModule,
        PrettyJsonModule,
    ],
    exports: [
        DbSyncIndicatorComponent
    ],
    declarations: [
        DbSyncIndicatorComponent
    ],
    providers: [
        { provide: JsonPipe, useClass: SafeJsonPipe },
        ThemeService,
        UserAgentService,
        ValidationService,
        PouchdbService
    ],
})
export class UfpServicesModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: UfpServicesModule,
      providers: [{ provide: JsonPipe, useClass: SafeJsonPipe },
        ThemeService,
        UserAgentService,
        ValidationService,
        PouchdbService]
    };
  }
}

