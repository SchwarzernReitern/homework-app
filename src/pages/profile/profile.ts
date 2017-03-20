/**
 * Created by Tristan on 17/3/19.
 */
import {Component} from '@angular/core';

import {NavController, ModalController} from 'ionic-angular';
import {LoginModal} from "../login/login";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public  modalCtrl: ModalController) {

  }

  presentModal() {
    let modal = this.modalCtrl.create(LoginModal);
    modal.present();
  }


}
