import {Component} from '@angular/core';

import {NavController, AlertController, ModalController} from 'ionic-angular';
import {SearchPage} from "../search/search";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    }


    async ionViewLoaded() {
        console.log('ionViewLoaded')
    }

    async ionViewWillEnter() {
        let res = await this.tolist();
        console.log(res)
        console.log('ionViewLoaded')
        console.log('ionViewWillEnter')
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }

    async gotoSearch() {
        let modal = this.modalCtrl.create(SearchPage);
        modal.present();

    }

    tolist(): Promise<string> {
        return new Promise((resove, reject) => {
            setTimeout(() => {
                resove("sss");
            }, 1000)
        })
    }

}
