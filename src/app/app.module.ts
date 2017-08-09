import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClockComponent } from './_components/clock/clock.component';
import { Config } from './app.config';
import { ConfigService } from './config.service';
import { environment } from '../environments/environment';
import { FooterComponent } from './_components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './_components/header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { JsonPipe } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LongDatePipe, ShortDateTimePipe, SortByStringPipe } from './_pipes/custom.pipes';
import { NetworknotifierComponent } from './_components/networknotifier/networknotifier.component';
import { NetworkNotifierService } from './_components/networknotifier/networknotifier.service';
import { NpmBadgeComponent } from './_components/npmbadge/npmbadge.component';
import { OverloadCitationComponent } from './overloadcitation/overload-citation.component';
import { PrettyJsonModule, SafeJsonPipe } from 'angular2-prettyjson';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { TabsModule } from 'ngx-bootstrap';
import { UfpFormsModule } from './_components/forms/forms.module';
import { UfpPouchDBModule } from './_pouchdb/pouchdb.module';
import { UfpServicesModule } from './_services/services.module';
import { ViolationNoticeComponent } from './violationnotice/violation-notice.component';
import { DbSyncIndicatorComponent } from './_pouchdb/db-sync-indicator/db-sync-indicator.component';



// Services

// App Components

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SettingsComponent,
    LayoutComponent,
    ClockComponent,
    NpmBadgeComponent,
    NetworknotifierComponent,
    OverloadCitationComponent,
    ViolationNoticeComponent,
    ShortDateTimePipe,
    LongDatePipe,
    SortByStringPipe,
    DbSyncIndicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrettyJsonModule,
    UfpFormsModule.forRoot(),
    UfpServicesModule,
    UfpPouchDBModule,
    TabsModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: JsonPipe, useClass: SafeJsonPipe },
    NetworkNotifierService,
    Config,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function ConfigLoader(configService: ConfigService) {
  return () => configService.load(environment.configFile);
}
