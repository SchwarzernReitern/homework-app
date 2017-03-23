import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html'
})
export class ChatPage {
    toName: string;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.toName = this.navParams.get("name");
        console.log(this.toName);
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatPage');
    }

}
