import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { CommonDataService } from "src/app/services/common-data.service";

@Component({
    selector: "footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"]
})

export class FooterModule implements OnInit {
    aFooter: any[] = [];
    aFooterColumn1: any[] = [];
    aFooterColumn2: any[] = [];
    aFooterColumn3: any[] = [];
    aFooterColumn4: any[] = [];

    constructor(private http: HttpClient, private commonService: CommonDataService) {

    };

    public async ngOnInit() {
        await this.initFooter();
    };

     /**
     * Функция получит поля футера.
     */
    private async initFooter() {
        try {
            await this.commonService.initFooterAsync().then((data: any) => {
                // Распределит пункты футера в каждый стобец.
                data.forEach((item: any) => {
                    if (item.column == 1 && item.title !== "gobizy") {                                 
                        this.aFooterColumn1.push(item);
                    }

                    else if (item.column == 2) {
                        this.aFooterColumn2.push(item);
                    }

                    else if (item.column == 3) {
                        this.aFooterColumn3.push(item);
                    }

                    else if (item.column == 4) {
                        this.aFooterColumn4.push(item);
                    }                    
                });
            });
        }

        catch (e: any) {
            throw new Error(e);
        }
    };

    /**
     * Функция распределит роуты по пунктам футера.
     * @param name - параметр роута с названием пункта.
     */
     public onGetMenuFooter(name: string) {
        // switch (name) {
        //     case "Вход или регистрация":
        //         this.router.navigate(["/login"], { queryParams: { loginType: "code" } });
        //         break;
        // }
    };
}