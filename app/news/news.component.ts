import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Observable } from 'rxjs';

@Component({
	selector: "News",
	moduleId: module.id,
	templateUrl: "./news.component.html",
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	selectedListPickerIndex: number = 0;

	private _data;

	constructor(
		private appService: AppService
	) { }

	ngOnInit(): void {
		this.getData();
	}

	onItemTap($event) {
		this.getData();
	}

	getUrl() {
		if (this.appService.language === "English") {
			return "https://demo4918783.mockable.io/en";
		}

		return "https://demo4547015.mockable.io/es";
	}

	getData() {
		const url = this.getUrl();
		this.appService.getNews(url)
			.subscribe((response) => {
				this.setUsersArray(response);
			});
	}

	setUsersArray(data) {
		this._data = data.articles;
		this.appService.news = data.articles;
	}
}

