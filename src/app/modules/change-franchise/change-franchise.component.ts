import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { API_URL } from "src/app/core/core-urls/api-url";
import { CommonDataService } from "src/app/services/common-data.service";

@Component({
    selector: "change-franchise",
    templateUrl: "./change-franchise.component.html",
    styleUrls: ["./change-franchise.component.scss"]
})

export class ChangeFranchiseModule implements OnInit {
    constructor(private http: HttpClient, private commonService: CommonDataService) {

    };

    public async ngOnInit() {

    };    
}