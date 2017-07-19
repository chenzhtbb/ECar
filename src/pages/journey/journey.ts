import { Component,ViewChild } from '@angular/core';

import { Nav,NavParams,NavController } from 'ionic-angular';

import { MapPage }        from '../map/map';

@Component({
  selector : 'page-journey',
  templateUrl: 'journey.html'
})

export class JourneyPage {
  @ViewChild(Nav) nav: Nav;

  constructor(
      public navCtrl:NavController,
      public navParams: NavParams
      ){ 
    let id = navParams.get('id');
    let name = navParams.get('name');
    //alert(id);
  }

  openRootPage(){
      this.navCtrl.popToRoot();
      //this.nav.setRoot(MapPage);
  }
}
