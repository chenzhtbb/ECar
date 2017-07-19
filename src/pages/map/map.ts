import { Component, OnInit ,Renderer2 } 		from '@angular/core';
import { LocationChangeListener } 	from '@angular/common'

@Component({
	selector : 'page-map',
	templateUrl : 'map.html'
})

export class MapPage implements OnInit{

	public map;

	constructor(
		public renderer: Renderer2
		){
	this.renderer.listen('window','message',(evt) => {
		let loc=evt.data;
		if(loc && loc.module=="geolocation"){
			let center = new qq.maps.LatLng(loc.lat,loc.lng);
			this.moveTo(center);
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


	
}