/**
 * Created by Tristan on 17/3/19.
 */
/**
 * Created by Tristan on 17/3/19.
 */
import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {FindpassPage} from "../findpass/findpass";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginModal {


    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewCanEnter(): boolean {
        // here we can either return true or false
        // depending on if we want to leave this view
        return true;
    }

    close() {
        this.navParams.get("root").close();
    }

    toRegisterPage() {
        this.navCtrl.push(RegisterPage);

    }

    toFindPassPage() {
        this.navCtrl.push(FindpassPage);
    }
}
