import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { JsonPipe } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LongDatePipe, ShortDateTimePipe, SortByStringPipe } from './_pipes/custom.pipes';
import { OverloadCitationComponent } from './overloadcitation/overload-citation.component';
import { PrettyJsonModule, SafeJsonPipe } from 'angular2-prettyjson';
import { RouterModule, Routes } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap';
import { UfpFormsModule } from './_components/forms/forms.module';
import { UfpPouchDBModule } from './_pouchdb/pouchdb.module';
import { UfpServicesModule } from './_services/services.module';
import { ViolationNoticeComponent } from './violationnotice/violation-notice.component';
import { CustomFormsModule } from 'ng2-validation';
import { Ng2CompleterModule } from 'ng2-completer';
import { ComboboxComponent } from './_components/forms/combobox/combobox.component';
import { UfpSettingsModule } from './settings/settings.module';
import { UfpComponentsModule } from './_components/components.module';
import { BusyModule, BusyConfig, BUSY_CONFIG_DEFAULTS } from 'angular2-busy';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { DatamanagerComponent } from './datamanager/datamanager.component';
import { DiagnoticsComponent } from './diagnotics/diagnotics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductFormsComponent } from './product-forms/product-forms.component';

// App Components
const busyConfig: BusyConfig = {
	message: BUSY_CONFIG_DEFAULTS.message,
	delay: BUSY_CONFIG_DEFAULTS.delay,
	template: `<div class="cssload-container">
<div class="cssload-whirlpool"></div>
</div>`,
	minDuration: BUSY_CONFIG_DEFAULTS.minDuration,
	backdrop: BUSY_CONFIG_DEFAULTS.backdrop,
	wrapperClass: BUSY_CONFIG_DEFAULTS.wrapperClass
};
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LayoutComponent,
		OverloadCitationComponent,
		ViolationNoticeComponent,
		ShortDateTimePipe,
		LongDatePipe,
		SortByStringPipe,
		ComboboxComponent,
		UserdetailComponent,
		DatamanagerComponent,
		DiagnoticsComponent,
		DashboardComponent,
		ProductFormsComponent /*Had to put this here instead of forms.module for some reason.*/

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
		Ng2CompleterModule,
		UfpComponentsModule.forRoot(),
		BusyModule.forRoot(busyConfig),
		ChartsModule
	],
	exports: [
		ChartsModule
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		{ provide: JsonPipe, useClass: SafeJsonPipe }

	],
	bootstrap: [AppComponent]
})
export class AppModule { }

