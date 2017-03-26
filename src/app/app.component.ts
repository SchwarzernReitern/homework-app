import {Component} from "@angular/core";
import {Platform} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {Splashscreen, StatusBar} from "ionic-native";
import {WelcomePage} from "../pages/welcome/welcome";
import {MenuPage} from "../pages/menu/menu";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage;
    constructor(platform: Platform, public storage: Storage) {
        storage.get('firstIn').then((result) => {
            if (result) {
                this.rootPage = MenuPage;
            }
            else {
                storage.set('firstIn', true);
                this.rootPage = WelcomePage;
            }
        });
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}
