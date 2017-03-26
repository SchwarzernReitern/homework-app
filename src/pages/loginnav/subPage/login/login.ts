/**
 * Created by Tristan on 17/3/19.
 */
/**
 * Created by Tristan on 17/3/19.
 */
import {Component, ViewChild} from "@angular/core";
import {Content, NavController, NavParams} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {FindpassPage} from "../findpass/findpass";
import {UserprofileProvider} from "../../../../providers/userprofile";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [UserprofileProvider]
})
export class LoginModal {
    @ViewChild(Content)
    content: Content;

    constructor(public navCtrl: NavController, public navParams: NavParams, public userProfileProvider: UserprofileProvider) {
    }

    ionViewCanEnter(): boolean {
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

    doLogin(){
        this.userProfileProvider.doLogoin();
    }
}
