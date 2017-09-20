import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { TabsComponent } from '../_components/tabs/tabs.component';
import { ProductFormsService } from '../product-forms/product-forms.service';
import { TabComponent } from '../_components/tabs/tab.component';
import { UserdetailComponent } from '../userdetail/userdetail.component';

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
	@ViewChild('userDetail') userDetailTemplate: UserdetailComponent;

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

	// getNewTicketNum(): string {
	// 	this.TicketNum = moment().format('YYYYMMDDHHmmssSS').toString();
	// 	return this.TicketNum;
	// }
	createNewTab(template: any) {
		const ticketNum = moment().format('YYYYMMDDHHmmssSS');
		this.tabsComponent.openTab(
			ticketNum,
			ticketNum,
			template,
			{ TicketNum: ticketNum },
			true
		);
	}

	saveActiveTab() {
		const activeTab = this.tabsComponent.getActiveTab();
		console.log('===>> Active Tab =====');
		console.log(activeTab);
	}
}
