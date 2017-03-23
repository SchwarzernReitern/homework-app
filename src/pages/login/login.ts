/**
 * Created by Tristan on 17/3/19.
 */
/**
 * Created by Tristan on 17/3/19.
 */
import { Component } from '@angular/core';
import { ViewController, NavController } from "ionic-angular";
import { RegisterPage } from "../register/register"
import { FindpassPage } from "../findpass/findpass";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginModal {
    constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    }

    close() {
        this.viewCtrl.dismiss();
    }
    toRegisterPage() {
        this.navCtrl.push(RegisterPage);
    }
    toFindPassPage() {
        this.navCtrl.push(FindpassPage);
    }
}
