import { Component } from '@angular/core';

import { App, ViewController } from 'ionic-angular';
import { ChatPage } from "../chat/chat"

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    constructor(public appCtrl: App, public viewCtrl: ViewController) {
    }
    toChat(name) {
        this.appCtrl.getRootNav().push(ChatPage, { name: name });
    }
}
