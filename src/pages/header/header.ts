import { Component } from '@angular/core';
import * as $ from "JQuery";

import { MapPage }        from '../map/map';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html'
})

export class HeaderPage {
  rootPage = MapPage;
  constructor() {

  }

  ionViewDidLoad() {
    //this.loadMap();
  }
}
/*
var map;

function init(center) {
        //定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
        map=new qq.maps.Map(document.getElementById("container"), {
            center: center, // 地图的中心地理坐标。
            zoom: 16, // 地图的中心地理坐标。
            disableDefaultUI: true
        });
        //document.getElementById('container').onload=function(){
        //	$("div").css("z-index","0");// 加载完成 
		//};
        //$("[href='http://map.qq.com/?center=110.275391%2C25.262339&l=16']").hide();
        //$(":contains('©2017 Tencent - GS(2016)930号 - Data© NavInfo')").remove();
        //var anchor = new qq.maps.Point(6, 6),
        //    size = new qq.maps.Size(24, 24),
        //    origin = new qq.maps.Point(0, 0),
        //   icon = new qq.maps.MarkerImage('http://lbs.qq.com/javascript_v2/img/center.gif', size, origin, anchor);
        //var marker = new qq.maps.Marker({
        //    icon: icon,
        //    map: map,
        //    position: center
        //});
        //let iframe = document.getElementById("geoPage");
		//var iWindow = (<HTMLElement> iframe).contentWindow;
		//iWindow.postMessage('getLocation', '*');
        //document.getElementById("geoPage").contentWindow.postMessage('getLocation', '*');
        //setInterval(function() {
        //   
        //}, 1000);
    }
window.onload = function() {
        //调用初始化函数地图
        //init(new qq.maps.LatLng(0,0));
    }
window.addEventListener('message', function(event) {
        var loc = event.data; // 接收位置信息
        console.log('location', loc);
        if (loc && loc.module == 'geolocation') { //定位成功,防止其他应用也会向该页面post信息，需判断module是否为'geolocation'
            var center = new qq.maps.LatLng(loc.lat, loc.lng);
            init(center);
            map.panTo(center);
            /*if (markersArray) {
                for (i in markersArray) {
                    markersArray[i].setMap(null);
                }
            }*/

            //alert(loc.lat);
 /*       } else { //定位组件在定位失败后，也会触发message, event.data为null
            //alert('定位失败');
        }
    }, false);

*/