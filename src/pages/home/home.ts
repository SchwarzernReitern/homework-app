import {Component} from "@angular/core";

import {App, ModalController, NavController} from "ionic-angular";
import {SearchPage} from "../search/search";
import {UserprofileProvider} from "../../providers/userprofile";
import {TestpaperPage} from "../testpaper/testpaper";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [UserprofileProvider]
})
export class HomePage {
    grade: string = '六年级';
    gradeSelectTitle: any = {
        title: '选择年级'
    }

    constructor(public navCtrl: NavController, public appCtrl: App, public userProfileProvider: UserprofileProvider, public modalCtrl: ModalController) {
    }
    gotoSearch() {
        this.appCtrl.getRootNav().push(SearchPage);
    }

    toTestPaperPage() {
        this.appCtrl.getRootNav().push(TestpaperPage);
    }

}
