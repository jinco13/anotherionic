import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl: './test.component.html'
})
export class TestModalPage {
    public list: any;
    public checked;
    public viewCtrl: ViewController;

    constructor(
        params: NavParams,
        viewCtrl: ViewController,
    ){
        this.list = params.get('data');
        this.viewCtrl = viewCtrl;
        console.log('data passed');
        console.log(params.get('data'));

    }

    public dismiss() {
        console.log(this.list);
        this.viewCtrl.dismiss({
            data: this.list
        });
    }


}
