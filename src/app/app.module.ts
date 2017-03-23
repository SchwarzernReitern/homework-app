import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from "../pages/profile/profile";
import { LoginModal } from "../pages/login/login";
import { SearchPage } from "../pages/search/search";
import { RegisterPage } from "../pages/register/register";
import { FindpassPage } from "../pages/findpass/findpass";
import { ChatPage } from "../pages/chat/chat";
import { WelcomePage } from "../pages/welcome/welcome";
import { IonicStorageModule } from '@ionic/storage';

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
        WelcomePage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
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
        ChatPage, WelcomePage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {




}
