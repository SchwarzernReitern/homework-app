import {Component} from '@angular/core';

import {App, ViewController} from 'ionic-angular';
import {ChatPage} from "../chat/chat"

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    contacts = new Array();

    constructor(public appCtrl: App, public viewCtrl: ViewController) {
        for (let i = 1; i <= 5; i++) {
            this.contacts.push(i)
        }
    }

    toChat(name) {
        this.appCtrl.getRootNav().push(ChatPage, {name: name});
    }
}
