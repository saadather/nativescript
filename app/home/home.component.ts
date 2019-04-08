import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Observable } from 'rxjs';
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    onButtonTap(): void {
        console.log("Button was pressed");
    }

    listPicker: Array<string> = ["English", "Spanish"];
    selectedListPickerIndex: number = 0;


    constructor(
        private appService: AppService,
        private router: RouterExtensions,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {

    }

    setIndex() {
        this.appService.language = this.listPicker[this.selectedListPickerIndex];
    }

}
