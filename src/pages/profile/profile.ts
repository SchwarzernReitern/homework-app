/**
 * Created by Tristan on 17/3/19.
 */
import {Component} from '@angular/core';

import {NavController, ModalController, App} from 'ionic-angular';
import {LoginModal} from "../login/login";

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public  appCtrl: App) {
    }

    presentModal() {
        this.appCtrl.getRootNav().push(LoginModal);
    }
}
