import {Component, ViewChild} from '@angular/core';
import {App, NavController, NavParams, Tab, Tabs} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {AboutPage} from "../about/about";
import {HomePage} from "../home/home";
import {SettingsPage} from "../settings/settings";
import {SearchPage} from "../search/search";

/*
 Generated class for the Menu page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})
export class MenuPage {
    root: any;


    constructor(public appCtrl: App) {
        this.root = TabsPage;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuPage');
    }

    toAboutPage() {
        this.root = AboutPage;
    }

    toHomePage() {
        this.root = TabsPage;
    }

    toSettingPage() {
        this.root = SettingsPage;
    }

    toSearchPage() {
        this.appCtrl.getRootNav().push(SearchPage);
    }
}
