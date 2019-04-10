import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: "Detail",
	moduleId: module.id,
	templateUrl: "./detail.component.html",
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    textFieldValue: string = "";

	currentNewsId;
	currentNews = {};
	
	constructor(private route: ActivatedRoute,
		private appService: AppService
	) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.currentNewsId = this.getNews(params.id);
		});
	}

	getNews(id) {
		console.log('data', this.appService.news);
		const data = this.appService.news;
		this.currentNews = data.find(item => id == item.source.id);
	}
	
}