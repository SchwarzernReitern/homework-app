import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from "@ionic/storage";

/*
 Generated class for the Userprofile provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class UserprofileProvider {

    constructor(public http: Http, public storage: Storage) {
        console.log('Hello Userprofile Provider');
    }

    getProfile() {
        return null;
    }

    doLogoin(): boolean {
        let p = {
            id: '123',
            name: 'json',
            headIcon: 'assets/avatar-rey.png',

        }
        this.storage.set("profile", JSON.stringify(p));
        return true
    }

    doLogout(): boolean {
        this.storage.remove("profile");
        return true;
    }

}
