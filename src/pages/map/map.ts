import { Component, OnInit ,Renderer2 } 		from '@angular/core';

import { LocationChangeListener } 	from '@angular/common';

import { ModalController  } from 'ionic-angular';

import { SiteSearchPage } from '../site-search/site-search';
import { JourneyPage }    from '../journey/journey';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';


@Component({
	templateUrl : 'map.html'
})

export class MapPage implements OnInit{

	public map;

	center: any;

	constructor(
		public modalCtrl: ModalController,
		public renderer: Renderer2
		){
	this.renderer.listen('window','message',(evt) => {
		let loc=evt.data;
		if(loc && loc.module=="geolocation"){
			this.center = new qq.maps.LatLng(loc.lat,loc.lng);
			this.moveTo(this.center);
		}
	});

	}

	ngOnInit(){
		this.map =new qq.maps.Map(document.getElementById("container"), {
            zoom: 16, // 地图的中心地理坐标。
            disableDefaultUI: true
        });
	}

	moveTo(center){
		this.map.panTo(center);
	}

	siteSearch(){
		let profileModal = this.modalCtrl.create(SiteSearchPage,{
			center:this.center
		});
   		profileModal.present();
	}

	
	
}