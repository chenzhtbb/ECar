import { Component } 		from '@angular/core';

import { ViewController ,NavParams  } from 'ionic-angular';

@Component({
	templateUrl : 'site-search.html'
})

export class SiteSearchPage {

	items: string[];
	site: string;
	center: any;
	constructor(
		public viewCtrl: ViewController,
		public params: NavParams
		){
		this.center=params.get('center');
		
		this.initializeItems();
		this.site="选择您要去的地点";
	}

	initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

	getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }
}