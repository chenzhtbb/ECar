import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public viewCtrl: ViewController
  	) { }

  dismiss(){
  	this.viewCtrl.dismiss();
  }
}
 