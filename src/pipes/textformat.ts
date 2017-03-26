import {Injectable, Pipe} from '@angular/core';

/*
 Generated class for the Textformat pipe.

 See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 Angular 2 Pipes.
 */
@Pipe({
    name: 'textformat'
})
export class Textformat {
    transform(value) {
        value = value
            .replace(/\r/g, "&nbsp;")
            .replace(/</, "&lt;")
            .replace(/>/, "&gt;")
            .replace(/\n/g, "<br>")
        return value;
    }
}
