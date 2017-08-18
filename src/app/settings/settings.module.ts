import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { AboutComponent } from './about/about.component';
import { GeneralComponent } from './general/general.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { ReleasenotesComponent } from './releasenotes/releasenotes.component';
import { TabsModule } from 'ngx-bootstrap';
import { UfpComponentsModule } from '../_components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TabsModule.forRoot(),
        UfpComponentsModule.forRoot()
    ],
    exports: [
        SettingsComponent,
        AboutComponent,
        GeneralComponent,
        ShortcutsComponent,
        ReleasenotesComponent
    ],
    declarations: [
        SettingsComponent,
        AboutComponent,
        GeneralComponent,
        ShortcutsComponent,
        ReleasenotesComponent
    ],
    providers: [],
})
export class UfpSettingsModule {
     static forRoot(): ModuleWithProviders {
    return {
      ngModule: UfpSettingsModule,
      providers: []
    };
  }
 }

