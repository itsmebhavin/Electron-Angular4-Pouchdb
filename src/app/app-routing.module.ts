import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
	{ path: '', redirectTo: '/layout/home', pathMatch: 'full' },
	{
		path: 'layout', 
		component: LayoutComponent,
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'settings', component: SettingsComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
