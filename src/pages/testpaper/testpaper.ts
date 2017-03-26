import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Textformat} from "../../pipes/textformat";

/*
 Generated class for the Testpaper page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-testpaper',
    templateUrl: 'testpaper.html',
    providers: [Textformat]
})
export class TestpaperPage {
    blog = "\r\r\r\r\r\rasdasd\nasdasdasd\nasdasdasd\n"

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TestpaperPage');
    }

    close() {
        this.viewCtrl.dismiss();
    }
}
