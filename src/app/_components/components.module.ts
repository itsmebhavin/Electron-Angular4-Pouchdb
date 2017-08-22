import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ClockComponent } from './clock/clock.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NetworknotifierComponent } from './networknotifier/networknotifier.component';
import { NetworkNotifierService } from './networknotifier/networknotifier.service';
import { NpmBadgeComponent } from './npmbadge/npmbadge.component';
import { UfpPouchDBModule } from '../_pouchdb/pouchdb.module';
import { ChildPageNavBarComponent } from './childpagenavbar/childpagenavbar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UfpPouchDBModule
    ],
    exports: [
        ClockComponent,
        FooterComponent,
        HeaderComponent,
        NetworknotifierComponent,
        NpmBadgeComponent,
        ChildPageNavBarComponent
    ],
    declarations: [
        ClockComponent,
        FooterComponent,
        HeaderComponent,
        NetworknotifierComponent,
        NpmBadgeComponent,
        ChildPageNavBarComponent
    ],
    providers: [NetworkNotifierService],
})
export class UfpComponentsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UfpComponentsModule,
            providers: [NetworkNotifierService]
        };
    }
}

