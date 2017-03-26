import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {ProfilePage} from "../pages/profile/profile";
import {LoginModal} from "../pages/loginnav/subPage/login/login";
import {SearchPage} from "../pages/search/search";
import {RegisterPage} from "../pages/loginnav/subPage/register/register";
import {FindpassPage} from "../pages/loginnav/subPage/findpass/findpass";
import {ChatPage} from "../pages/chat/chat";
import {WelcomePage} from "../pages/welcome/welcome";
import {IonicStorageModule} from '@ionic/storage';
import {LoginnavPage} from "../pages/loginnav/loginnav";
import {MenuPage} from "../pages/menu/menu";
import {SettingsPage} from "../pages/settings/settings";
import {TestpaperPage} from "../pages/testpaper/testpaper";
import {Textformat} from "../pipes/textformat";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        ProfilePage,
        LoginModal,
        TabsPage,
        SearchPage,
        RegisterPage,
        FindpassPage,
        ChatPage,
        WelcomePage,
        LoginnavPage,
        MenuPage,
        SettingsPage,
        TestpaperPage,
        Textformat
    ],
    imports: [
        IonicModule.forRoot(MyApp, {mode: 'ios'}),
        IonicStorageModule.forRoot({
            name: '__mydb',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        LoginModal,
        ProfilePage,
        SearchPage,
        RegisterPage,
        FindpassPage,
        ChatPage, WelcomePage,
        LoginnavPage,
        MenuPage,
        SettingsPage,
        TestpaperPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {


}
