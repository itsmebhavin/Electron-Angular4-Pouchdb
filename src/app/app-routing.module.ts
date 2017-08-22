import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { LayoutComponent } from './layout/layout.component';
import { OverloadCitationComponent } from './overloadcitation/overload-citation.component';
import { ViolationNoticeComponent } from './violationnotice/violation-notice.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { DatamanagerComponent } from './datamanager/datamanager.component';
import { DiagnoticsComponent } from './diagnotics/diagnotics.component';

const routes: Routes = [
  { path: '', redirectTo: '/layout/home', pathMatch: 'full' },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'overloadcitation', component: OverloadCitationComponent },
      { path: 'userdetail', component: UserdetailComponent },
      { path: 'violationnotice', component: ViolationNoticeComponent },
      { path: 'datamanager', component: DatamanagerComponent },
      { path: 'diagnotics', component: DiagnoticsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
