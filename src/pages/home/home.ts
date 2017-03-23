import { Component } from '@angular/core';

import {NavController, AlertController, ModalController} from 'ionic-angular';
import {SearchPage} from "../search/search";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,public modalCtrl:ModalController) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  gotoSearch(){
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }

}
