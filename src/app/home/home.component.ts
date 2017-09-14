import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { TabsComponent } from '../_components/tabs/tabs.component';
import { ProductFormsService } from '../product-forms/product-forms.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [ProductFormsService]
})

export class HomeComponent implements OnInit {
	@ViewChild(TabsComponent) tabsComponent;
	@ViewChild('overloadCitation') overloadCitationTemplate;
	@ViewChild('violationNotice') violationNoticeTemplate;
	@ViewChild('userDetail') userDetailTemplate;

	isDynamicTabExists = false;
	constructor(private _productService: ProductFormsService) {
		this._productService.addUserDetail$.subscribe((result) => {
			console.log('inside onAddUserDetail.');
			this.createNewTab(this.userDetailTemplate);
		});
		this._productService.addOverloadCitation$.subscribe((result) => {
			console.log('inside onAddOverloadCitation.');
			this.createNewTab(this.overloadCitationTemplate);
		});
		this._productService.addViolationNotice$.subscribe((result) => {
			console.log('inside onAddViolationNotice.');
			this.createNewTab(this.violationNoticeTemplate);
		});
	}

	ngOnInit() {

	}

	onAddedTab(NumOfTabs) {
		this.isDynamicTabExists = (NumOfTabs > 0);
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
