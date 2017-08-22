import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	// Doughnut
	public doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	public doughnutChartData = [350, 450, 100];
	public doughnutChartType = 'doughnut';

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}

	constructor(private _router: Router) {

	}


	ngOnInit() {

	}

	goto(routerPath) {
		console.log(routerPath);
		this._router.navigate(['/layout/' + routerPath]);
	}
}
