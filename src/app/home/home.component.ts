import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { TabsComponent } from '../_components/tabs/tabs.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	@ViewChild(TabsComponent) tabsComponent;
	@ViewChild('overloadCitation') overloadCitationTemplate;
	@ViewChild('violationNotice') violationNoticeTemplate;
	@ViewChild('userDetail') userDetailTemplate;
	constructor() {

	}

	ngOnInit() {

	}

	onAddOverloadCitation() {
		console.log('inside onAddOverloadCitation.');
		this.createNewTab(this.overloadCitationTemplate);
	}

	onAddViolationNotice() {
		console.log('inside onAddViolationNotice.');
		this.createNewTab(this.violationNoticeTemplate);
	}

	onAddUserDetail() {
		console.log('inside onAddUserDetail.');
		this.createNewTab(this.userDetailTemplate);
	}

	createNewTab(template: any) {
		const ticketNum = moment().format('YYYYMMDDHHmmssSS');
		this.tabsComponent.openTab(
			ticketNum,
			ticketNum,
			template,
			{},
			true
		);
	}
}
