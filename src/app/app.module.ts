import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClockComponent } from './_components/clock/clock.component';
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
import { TabsModule } from 'ngx-bootstrap';
import { UfpFormsModule } from './_components/forms/forms.module';
import { UfpPouchDBModule } from './_pouchdb/pouchdb.module';
import { UfpServicesModule } from './_services/services.module';
import { ViolationNoticeComponent } from './violationnotice/violation-notice.component';
import { PouchdbService } from './_pouchdb/pouchdb-service/pouchdb.service';
import { CustomFormsModule } from 'ng2-validation';
import { Ng2CompleterModule } from 'ng2-completer';
import { ComboboxComponent } from './_components/forms/combobox/combobox.component';
import { UfpSettingsModule } from './settings/settings.module';

// Services

// App Components

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		LayoutComponent,
		ClockComponent,
		NpmBadgeComponent,
		NetworknotifierComponent,
		OverloadCitationComponent,
		ViolationNoticeComponent,
		ShortDateTimePipe,
		LongDatePipe,
		SortByStringPipe,
		ComboboxComponent /*Had to put this here instead of forms.module for some reason.*/
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
		UfpSettingsModule.forRoot(),
		UfpServicesModule,
		UfpPouchDBModule,
		TabsModule.forRoot(),
		CustomFormsModule,
		Ng2CompleterModule
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		{ provide: JsonPipe, useClass: SafeJsonPipe },
		NetworkNotifierService,
		ConfigService,
		{
			provide: APP_INITIALIZER,
			useFactory: ConfigLoader,
			deps: [ConfigService, PouchdbService],
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
export function ConfigLoader(configService: ConfigService, pouchsvc: PouchdbService) {
	const config = configService.load(environment.configFile);
	return () => config.then(data => {
		pouchsvc.initializeConfig(data);
	});
}
