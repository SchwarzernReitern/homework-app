import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {StatusBar, Splashscreen} from 'ionic-native';

import {TabsPage} from '../pages/tabs/tabs';
import {WelcomePage} from "../pages/welcome/welcome";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage;

    constructor(platform: Platform, public storage: Storage) {
        storage.get('firstIn').then((result) => {
            if (result) {
                this.rootPage = TabsPage;
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
