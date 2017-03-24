import {Component, ViewChild} from "@angular/core";
import {NavController, ViewController} from "ionic-angular";
import {LoginModal} from "./subPage/login/login";

/*
 Generated class for the Loginnav page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-loginnav',
    templateUrl: 'loginnav.html'
})
export class LoginnavPage {
    @ViewChild("loginNav")
    loginNav: NavController;

    constructor(public viewCtrl: ViewController) {
    }

    ngOnInit() {
        this.loginNav.push(LoginModal, {root: this})
    }

    close() {
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginnavPage');
    }

}
