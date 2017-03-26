import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";

/*
 Generated class for the Register page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {

    constructor(public viewCtrl: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FindpassPage');
    }

    close() {
        this.viewCtrl.dismiss();
    }
}
