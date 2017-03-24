/**
 * Created by Tristan on 17/3/19.
 */
import {Component} from "@angular/core";

import {App, ModalController, NavController} from "ionic-angular";
import {LoginnavPage} from "../loginnav/loginnav";

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public  appCtrl: App) {
    }
    presentModal() {
        this.modalCtrl.create(LoginnavPage).present();
    }
}
